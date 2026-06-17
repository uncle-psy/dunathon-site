#!/usr/bin/env node
/*
 * build_docx.js — Render a structured Markdown spec into a clean Word document.
 *
 * House style (Kiduna): Georgia font, black type only, US Letter, 1" margins,
 * title page, auto Table of Contents (H1–H3), page numbers in the footer.
 *
 * Usage:  node build_docx.js <input.md> <output.docx>
 *
 * Supported Markdown subset (the spec template stays inside this subset):
 *   - Optional YAML-ish front matter at the very top, delimited by --- lines:
 *       title:, subtitle:, author:, date:, footer:
 *   - Headings:  # H1, ## H2, ### H3, #### H4
 *   - Paragraphs (blank-line separated)
 *   - Bullet lists: "- " or "* "  (2-space indent = nested level 1)
 *   - Numbered lists: "1. "
 *   - Tables: | a | b |  with a | --- | --- | separator row
 *   - Horizontal rule: a line of only --- (in body) → thin divider
 *   - Blockquote: "> "
 *   - Inline: **bold**, *italic*, `code`, [text](url)
 */

const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, TableOfContents, PageBreak, ExternalHyperlink,
} = require("docx");

const FONT = "Georgia";
const BLACK = "000000";
const CONTENT_WIDTH = 9360; // US Letter, 1" margins (12240 - 2880)

// ---------- read + split front matter ----------
const inPath = process.argv[2];
const outPath = process.argv[3];
if (!inPath || !outPath) {
  console.error("Usage: node build_docx.js <input.md> <output.docx>");
  process.exit(1);
}
let raw = fs.readFileSync(inPath, "utf8").replace(/\r\n/g, "\n");

let meta = {};
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
if (fmMatch) {
  fmMatch[1].split("\n").forEach((line) => {
    const m = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (m) meta[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  });
  raw = raw.slice(fmMatch[0].length);
}

const lines = raw.split("\n");

// ---------- inline parsing ----------
function inlineRuns(text, opts = {}) {
  const base = Object.assign({ font: FONT, color: BLACK, size: 22 }, opts);
  const runs = [];
  // tokenizer over **bold**, *italic*, `code`, [text](url)
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0, m;
  const push = (t, extra) => {
    if (t.length === 0) return;
    runs.push(new TextRun(Object.assign({}, base, { text: t }, extra)));
  };
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) push(text.slice(last, m.index), {});
    if (m[1]) push(m[2], { bold: true });
    else if (m[3]) push(m[4], { italics: true });
    else if (m[5]) push(m[6], { font: "Courier New" });
    else if (m[7]) {
      runs.push(new ExternalHyperlink({
        link: m[9],
        children: [new TextRun(Object.assign({}, base, { text: m[8], style: "Hyperlink" }))],
      }));
    }
    last = re.lastIndex;
  }
  if (last < text.length) push(text.slice(last), {});
  if (runs.length === 0) push(" ", {});
  return runs;
}

// ---------- block parsing ----------
const children = [];
const border = { style: BorderStyle.SINGLE, size: 1, color: "BFBFBF" };
const cellBorders = { top: border, bottom: border, left: border, right: border };

function flushTable(buf) {
  // buf: array of raw "| a | b |" lines (header, separator, rows...)
  const rowsRaw = buf.filter((l) => !/^\s*\|?\s*:?-{2,}/.test(l.replace(/\|/g, "-")) === true || true);
  const parse = (l) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
  const header = parse(buf[0]);
  const bodyRows = buf.slice(2).map(parse);
  const nCols = header.length;
  const colW = Math.floor(CONTENT_WIDTH / nCols);
  const colWidths = Array(nCols).fill(colW);
  colWidths[nCols - 1] = CONTENT_WIDTH - colW * (nCols - 1);

  const mkRow = (cells, isHeader) =>
    new TableRow({
      tableHeader: !!isHeader,
      children: cells.map((c, i) =>
        new TableCell({
          borders: cellBorders,
          width: { size: colWidths[i], type: WidthType.DXA },
          shading: isHeader ? { fill: "EFEFEF", type: ShadingType.CLEAR, color: "auto" } : undefined,
          margins: { top: 60, bottom: 60, left: 120, right: 120 },
          children: [new Paragraph({
            spacing: { before: 20, after: 20 },
            children: inlineRuns(c, { size: 20, bold: !!isHeader }),
          })],
        })
      ),
    });

  const rows = [mkRow(header, true)];
  bodyRows.forEach((r) => {
    while (r.length < nCols) r.push("");
    rows.push(mkRow(r, false));
  });

  children.push(new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows,
  }));
  children.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "", font: FONT })] }));
}

let i = 0;
while (i < lines.length) {
  let line = lines[i];

  // blank
  if (/^\s*$/.test(line)) { i++; continue; }

  // table block
  if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && lines[i + 1].includes("-")) {
    const buf = [];
    while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
    flushTable(buf);
    continue;
  }

  // horizontal rule
  if (/^\s*---+\s*$/.test(line)) {
    children.push(new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 1 } },
      spacing: { before: 80, after: 160 },
      children: [new TextRun({ text: "", font: FONT })],
    }));
    i++; continue;
  }

  // headings
  const h = line.match(/^(#{1,4})\s+(.*)$/);
  if (h) {
    const level = h[1].length;
    const txt = h[2].trim();
    const map = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3, 4: HeadingLevel.HEADING_4 };
    children.push(new Paragraph({ heading: map[level], children: inlineRuns(txt, { bold: true }) }));
    i++; continue;
  }

  // blockquote
  if (/^\s*>\s?/.test(line)) {
    const txt = line.replace(/^\s*>\s?/, "");
    children.push(new Paragraph({
      indent: { left: 480 },
      spacing: { before: 60, after: 60 },
      border: { left: { style: BorderStyle.SINGLE, size: 12, color: "BFBFBF", space: 8 } },
      children: inlineRuns(txt, { italics: true }),
    }));
    i++; continue;
  }

  // bullet list
  if (/^(\s*)[-*]\s+/.test(line)) {
    while (i < lines.length && /^(\s*)[-*]\s+/.test(lines[i])) {
      const m = lines[i].match(/^(\s*)[-*]\s+(.*)$/);
      const indent = m[1].length;
      const lvl = indent >= 2 ? 1 : 0;
      children.push(new Paragraph({
        numbering: { reference: "bullets", level: lvl },
        spacing: { before: 20, after: 20 },
        children: inlineRuns(m[2]),
      }));
      i++;
    }
    continue;
  }

  // numbered list
  if (/^\s*\d+\.\s+/.test(line)) {
    while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
      const m = lines[i].match(/^\s*\d+\.\s+(.*)$/);
      children.push(new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { before: 20, after: 20 },
        children: inlineRuns(m[1]),
      }));
      i++;
    }
    continue;
  }

  // paragraph (gather continuation lines until blank/blockstart)
  const buf = [line];
  i++;
  while (i < lines.length && !/^\s*$/.test(lines[i]) &&
         !/^(#{1,4})\s/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i]) &&
         !/^\s*\d+\.\s+/.test(lines[i]) && !/^\s*\|.*\|\s*$/.test(lines[i]) &&
         !/^\s*>\s?/.test(lines[i]) && !/^\s*---+\s*$/.test(lines[i])) {
    buf.push(lines[i]); i++;
  }
  children.push(new Paragraph({
    spacing: { before: 40, after: 120 },
    alignment: AlignmentType.LEFT,
    children: inlineRuns(buf.join(" ")),
  }));
}

// ---------- title page + TOC ----------
const front = [];
if (meta.title) {
  front.push(new Paragraph({ spacing: { before: 2600, after: 120 }, children: [new TextRun({ text: meta.title, font: FONT, color: BLACK, bold: true, size: 56 })] }));
}
if (meta.subtitle) {
  front.push(new Paragraph({ spacing: { after: 400 }, children: [new TextRun({ text: meta.subtitle, font: FONT, color: BLACK, size: 28 })] }));
}
const metaLine = (label, val) => new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: label + "  ", font: FONT, color: BLACK, bold: true, size: 20 }), new TextRun({ text: val, font: FONT, color: BLACK, size: 20 })] });
if (meta.author) front.push(metaLine("Prepared by", meta.author));
if (meta.date) front.push(metaLine("Date", meta.date));
if (meta.status) front.push(metaLine("Status", meta.status));
front.push(new Paragraph({ children: [new PageBreak()] }));
front.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Contents", font: FONT, color: BLACK, bold: true })] }));
front.push(new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-3" }));
front.push(new Paragraph({ children: [new PageBreak()] }));

// ---------- assemble document ----------
const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22, color: BLACK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 34, bold: true, color: BLACK },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0, keepNext: true } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 27, bold: true, color: BLACK },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1, keepNext: true } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 23, bold: true, color: BLACK },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 2, keepNext: true } },
      { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 22, bold: true, italics: true, color: BLACK },
        paragraph: { spacing: { before: 140, after: 80 }, outlineLevel: 3, keepNext: true } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 280 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 280 } } } },
      ] },
      { reference: "numbers", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 300 } } } },
      ] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    footers: {
      default: new (require("docx").Footer)({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: (meta.footer || "Kiduna") + "   ·   ", font: FONT, color: BLACK, size: 18 }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, color: BLACK, size: 18 }),
          ],
        })],
      }),
    },
    children: [...front, ...children],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(outPath, buf);
  console.log("Wrote " + outPath + " (" + buf.length + " bytes)");
});
