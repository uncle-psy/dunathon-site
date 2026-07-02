/* ==========================================================================
   Dunathon — Tasks boards (prototype). Data-driven, multi-board Kanban.
   Boards come from window.Duna_BOARDS (see assets/boards-data.js). The default
   board is Kidunaverse, imported from the Kiduna Club Trello export. You can
   switch boards, spin up a new one, add tasks, claim them, hand work to an
   agent, and complete them. No drag-and-drop yet; status changes happen
   through the card menu and the detail modal. All state is in-memory.
   ========================================================================== */
(function () {
  "use strict";

  var BOARDS = window.Duna_BOARDS || {};
  var ORDER = (window.Duna_BOARD_ORDER || Object.keys(BOARDS)).slice();
  var activeId = ORDER[0];
  var filter = "all";
  var newCounter = 9000;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var board = $("#kanban");
  var veil = $("#taskModal");
  var openId = null;

  function B() { return BOARDS[activeId]; }
  function actor(id) { var b = B(); return id && b.members[id] ? b.members[id] : null; }
  function ME() { return B().me; }
  function colName(cid) { var c = B().columns.filter(function (x) { return x.id === cid; })[0]; return c ? c.name : cid; }

  var PRIO_NAME = { urgent: "Urgent", high: "High", med: "Medium", low: "Low" };

  /* ---------- avatars ---------- */
  function avatarHTML(id) {
    var a = actor(id);
    if (!a) return '<span class="avatar unassigned" title="Unassigned">+</span>';
    if (a.kind === "agent") return '<span class="avatar agent" title="' + esc(a.name) + ' · agent">◇</span>';
    return '<span class="avatar ' + (a.tone || "") + '" title="' + esc(a.name) + '">' + esc(a.initials) + '</span>';
  }
  function avatarStack(ids) {
    if (!ids || !ids.length) return '<span class="assignee">' + avatarHTML(null) + '</span>';
    var shown = ids.slice(0, 3).map(avatarHTML).join("");
    var extra = ids.length > 3 ? '<span class="avatar more">+' + (ids.length - 3) + '</span>' : "";
    var anyAgent = ids.some(function (i) { var a = actor(i); return a && a.kind === "agent"; });
    return '<span class="assignee astack">' + shown + extra + (anyAgent ? '<span class="agent-tag">agent</span>' : "") + '</span>';
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function labelPill(l) {
    return '<span class="t-label" style="color:' + l.h + ';background:color-mix(in srgb,' + l.h + ' 18%,transparent)">' + esc(l.n) + '</span>';
  }

  /* ---------- filters ---------- */
  function passesFilter(t) {
    if (filter === "all") return true;
    if (filter === "mine") return (t.assignees || []).indexOf(ME()) !== -1;
    if (filter === "agents") return (t.assignees || []).some(function (i) { var a = actor(i); return a && a.kind === "agent"; });
    if (filter === "unassigned") return !(t.assignees && t.assignees.length);
    return true;
  }

  /* ---------- card ---------- */
  function cardHTML(t) {
    var anyAgent = (t.assignees || []).some(function (i) { var a = actor(i); return a && a.kind === "agent"; });
    var labels = (t.labels || []).slice(0, 3).map(labelPill).join("");
    var prio = t.prio ? '<span class="t-prio ' + t.prio + '"><span class="pd"></span>' + PRIO_NAME[t.prio] + '</span>' : "";
    var checks = (t.checks && t.checks[1]) ? '<span class="t-badge" title="Checklist">✓ ' + t.checks[0] + '/' + t.checks[1] + '</span>' : "";
    var due = t.due ? '<span class="t-badge due" title="Due">◷ ' + fmtDate(t.due) + '</span>' : "";
    var foot = (prio || checks || due)
      ? '<div class="t-meta">' + prio + checks + due + '<span class="t-meta-spacer"></span>' + avatarStack(t.assignees) + '</div>'
      : '<div class="t-meta"><span class="t-meta-spacer"></span>' + avatarStack(t.assignees) + '</div>';
    return '' +
      '<article class="tcard' + (anyAgent ? ' is-agent' : '') + '" data-id="' + esc(t.id) + '" tabindex="0" role="button" aria-label="Open ' + esc(t.title) + '">' +
        (labels ? '<div class="t-labels">' + labels + '</div>' : "") +
        '<p class="t-title">' + esc(t.title) + '</p>' +
        foot +
      '</article>';
  }

  function fmtDate(iso) {
    if (!iso) return "";
    if (!/^\d{4}-\d{2}-\d{2}/.test(iso)) return iso; // already pretty
    var m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var p = iso.split("-");
    return m[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10);
  }

  /* ---------- render board ---------- */
  function render() {
    var b = B();
    board.innerHTML = "";
    b.columns.forEach(function (c) {
      var inCol = b.tasks.filter(function (t) { return t.col === c.id && passesFilter(t); });
      var col = document.createElement("section");
      col.className = "col";
      col.style.setProperty("--col-accent", c.color);
      var cards = inCol.length ? inCol.map(cardHTML).join("") : '<div class="col-empty">Nothing here yet.</div>';
      col.innerHTML =
        '<div class="col-head">' +
          '<span class="col-rail"></span>' +
          '<span class="col-name">' + esc(c.name) + '</span>' +
          '<span class="col-count">' + inCol.length + '</span>' +
          '<span class="col-spacer"></span>' +
        '</div>' +
        '<div class="col-body">' + cards + '</div>' +
        '<button class="col-add" data-add="' + esc(c.id) + '">+ Add a task</button>';
      board.appendChild(col);
    });
    renderTabs();
    var titleEl = $("#boardName");
    if (titleEl) titleEl.textContent = b.name;
    var genesis = $("#boardGenesis");
    if (genesis) genesis.style.display = (activeId === "kidunaverse" || activeId === "dunathon") ? "" : "none";
  }

  /* ---------- board switcher ---------- */
  function renderTabs() {
    var tabs = $("#boardTabs");
    if (!tabs) return;
    tabs.innerHTML = ORDER.map(function (id) {
      var b = BOARDS[id];
      var n = b.tasks.length;
      return '<button class="board-tab' + (id === activeId ? " active" : "") + '" data-board="' + id + '">' +
        esc(b.name) + '<span class="bt-count">' + n + '</span></button>';
    }).join("");
  }

  function switchBoard(id) {
    if (!BOARDS[id]) return;
    activeId = id;
    filter = "all";
    document.querySelectorAll(".board-filters .chip").forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-filter") === "all"); });
    closeModal();
    render();
  }

  function newBoard() {
    var name = window.prompt("Name your new board:");
    if (!name) return;
    var id = "b" + (++newCounter);
    BOARDS[id] = {
      id: id, name: name.trim(), me: "me",
      members: { me: { name: "You", initials: "YOU", tone: "", kind: "human" } },
      columns: [
        { id: "todo", name: "To Do", color: "#9094A3" },
        { id: "doing", name: "In Progress", color: "#EAAA00" },
        { id: "done", name: "Done", color: "#00EB75" }
      ],
      tasks: []
    };
    ORDER.push(id);
    switchBoard(id);
  }

  /* ---------- modal ---------- */
  function optionList(selectedCol) {
    return B().columns.map(function (c) {
      return '<option value="' + c.id + '"' + (c.id === selectedCol ? " selected" : "") + '>' + esc(c.name) + '</option>';
    }).join("");
  }

  function assigneeLine(t) {
    var ids = t.assignees || [];
    if (!ids.length) return avatarHTML(null) + '<span style="color:var(--fg-soft)">Unassigned</span>';
    return ids.map(function (id) {
      var a = actor(id);
      var role = a && a.kind === "agent" ? '<span class="agent-tag">' + esc(a.note || "agent") + '</span>' : "";
      return '<span class="m-person">' + avatarHTML(id) + '<span>' + esc(a ? a.name : id) + '</span>' + role + '</span>';
    }).join("");
  }

  function activityHTML(t) {
    if (t.log && t.log.length) {
      return t.log.map(function (e) {
        return '<div class="ma-item"><span class="ma-dot' + (e[3] ? " sky" : "") + '"></span>' +
          '<span class="ma-txt"><b>' + esc(e[0]) + '</b> ' + esc(e[1]) + ' <span class="ma-when">· ' + esc(e[2]) + '</span></span></div>';
      }).join("");
    }
    var bits = [];
    if (t.updated) bits.push('<div class="ma-item"><span class="ma-dot"></span><span class="ma-txt">Last activity <span class="ma-when">· ' + fmtDate(t.updated) + '</span></span></div>');
    if (t.comments) bits.push('<div class="ma-item"><span class="ma-dot sky"></span><span class="ma-txt">' + t.comments + ' comment' + (t.comments > 1 ? "s" : "") + ' on the original card</span></div>');
    if (!bits.length) bits.push('<div class="ma-item"><span class="ma-dot"></span><span class="ma-txt" style="color:var(--fg-dim)">No activity yet.</span></div>');
    return bits.join("");
  }

  function task(id) { return B().tasks.filter(function (x) { return x.id === id; })[0]; }

  function openModal(id) {
    var t = task(id);
    if (!t) return;
    openId = id;
    var labels = (t.labels || []).map(labelPill).join("") || '<span style="color:var(--fg-dim);font-size:12px">No labels</span>';
    var ids = t.assignees || [];
    var hasHuman = ids.some(function (i) { var a = actor(i); return a && a.kind === "human"; });
    var canClaim = ids.indexOf(ME()) === -1;
    var canAgent = !ids.some(function (i) { var a = actor(i); return a && a.kind === "agent"; });

    $("#mLabels", veil).innerHTML = (t.labels || []).map(labelPill).join("");
    $("#mTitle", veil).textContent = t.title;
    $("#mId", veil).textContent = t.id + " · " + B().name;

    var checksRow = (t.checks && t.checks[1])
      ? '<div class="m-row"><span class="m-key">Checklist</span><span class="m-val">✓ ' + t.checks[0] + ' of ' + t.checks[1] + ' done</span></div>' : "";

    $("#mBody", veil).innerHTML =
      '<div class="m-row"><span class="m-key">Status</span><span class="m-val">' +
        '<select class="m-select" id="mStatus">' + optionList(t.col) + '</select></span></div>' +
      '<div class="m-row"><span class="m-key">Assignee</span><span class="m-val" id="mAssignee">' + assigneeLine(t) + '</span></div>' +
      '<div class="m-row"><span class="m-key">Priority</span><span class="m-val">' +
        (t.prio ? '<span class="t-prio ' + t.prio + '"><span class="pd"></span>' + PRIO_NAME[t.prio] + '</span>' : '<span style="color:var(--fg-dim)">—</span>') + '</span></div>' +
      '<div class="m-row"><span class="m-key">Labels</span><span class="m-val">' + labels + '</span></div>' +
      checksRow +
      '<div class="m-row"><span class="m-key">Due</span><span class="m-val">' + (t.due ? fmtDate(t.due) : "—") + '</span></div>' +
      (t.desc ? '<div class="m-desc"><p>' + esc(t.desc).replace(/\n+/g, "<br>") + '</p></div>' : "") +
      '<div class="m-activity"><div class="ma-h">Activity</div>' + activityHTML(t) + '</div>';

    var foot = $("#mFoot", veil), btns = "";
    if (canClaim) btns += '<button class="btn btn-primary" data-act="claim">Pick this up</button>';
    if (canAgent) btns += '<button class="btn btn-secondary" data-act="agent">Hand to an agent</button>';
    btns += '<span class="foot-spacer"></span>';
    if (!isLastCol(t.col)) btns += '<button class="btn btn-secondary" data-act="done">Mark complete</button>';
    foot.innerHTML = btns;

    veil.classList.add("open");
    veil.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    $("#mStatus", veil).addEventListener("change", function (e) {
      moveTask(id, e.target.value, ME());
      openModal(id); render();
    });
  }

  function isLastCol(cid) { var cols = B().columns; return cols.length && cols[cols.length - 1].id === cid; }

  function closeModal() {
    veil.classList.remove("open");
    veil.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openId = null;
  }

  function logEvent(t, who, what, isAgent) { t.log = t.log || []; t.log.unshift([who, what, "just now", !!isAgent]); }

  function moveTask(id, cid, byActor) {
    var t = task(id);
    if (!t || t.col === cid) return;
    var who = actor(byActor);
    t.col = cid;
    logEvent(t, who ? who.name : "You", "moved this to " + colName(cid), who && who.kind === "agent");
  }

  /* ---------- actions ---------- */
  function claim(id) {
    var t = task(id), me = ME();
    t.assignees = t.assignees || [];
    if (t.assignees.indexOf(me) === -1) t.assignees.push(me);
    var first = B().columns[0].id, second = B().columns[1] ? B().columns[1].id : first;
    if (t.col === first) t.col = second;
    logEvent(t, actor(me) ? actor(me).name : "You", "picked this up", false);
    openModal(id); render();
  }

  function pickAgent() {
    var b = B();
    var ag = Object.keys(b.members).filter(function (k) { return b.members[k].kind === "agent"; });
    return ag[0] || null;
  }

  function handToAgent(id) {
    var t = task(id), ag = pickAgent();
    if (!ag) { window.alert("This board has no agents yet. In the live system you'd invite one here."); return; }
    t.assignees = t.assignees || [];
    if (t.assignees.indexOf(ag) === -1) t.assignees.push(ag);
    var first = B().columns[0].id, second = B().columns[1] ? B().columns[1].id : first;
    if (t.col === first) t.col = second;
    var meName = actor(ME()) ? actor(ME()).name : "You";
    logEvent(t, meName, "handed this to " + actor(ag).name, false);
    logEvent(t, actor(ag).name, "accepted the task", true);
    openModal(id); render();
  }

  function complete(id) {
    var t = task(id), last = B().columns[B().columns.length - 1].id;
    t.col = last;
    var whoId = (t.assignees && t.assignees[0]) || ME();
    var who = actor(whoId);
    logEvent(t, who ? who.name : "You", "marked this " + colName(last), who && who.kind === "agent");
    openModal(id); render();
  }

  /* ---------- add task (stands in for the Builder Kit prompt) ---------- */
  function addTask(cid) {
    var title = window.prompt("Describe the task (this is where the Builder Kit prompt will go):");
    if (!title) return;
    var b = B();
    var t = {
      id: b.name.slice(0, 1).toUpperCase() + "-" + (++newCounter),
      col: cid, title: title.trim(), desc: "Created from a prompt on the board. In the live system this would be drafted and routed by the Builder Kit.",
      labels: [], prio: "med", assignees: [], due: null, checks: null, updated: "today", comments: 0, attachments: 0,
      log: [[actor(ME()) ? actor(ME()).name : "You", "created this task", "just now", false]]
    };
    b.tasks.push(t);
    render();
  }

  /* ---------- events ---------- */
  board.addEventListener("click", function (e) {
    var add = e.target.closest("[data-add]");
    if (add) { addTask(add.getAttribute("data-add")); return; }
    var card = e.target.closest(".tcard");
    if (card) openModal(card.getAttribute("data-id"));
  });
  board.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var card = e.target.closest(".tcard");
    if (card) { e.preventDefault(); openModal(card.getAttribute("data-id")); }
  });

  veil.addEventListener("click", function (e) {
    if (e.target === veil || e.target.closest("[data-close]")) return closeModal();
    var act = e.target.closest("[data-act]");
    if (!act || !openId) return;
    var a = act.getAttribute("data-act");
    if (a === "claim") claim(openId);
    else if (a === "agent") handToAgent(openId);
    else if (a === "done") complete(openId);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  document.querySelectorAll(".board-filters .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".board-filters .chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      filter = chip.getAttribute("data-filter");
      render();
    });
  });

  var tabs = $("#boardTabs");
  if (tabs) tabs.addEventListener("click", function (e) {
    var t = e.target.closest("[data-board]");
    if (t) switchBoard(t.getAttribute("data-board"));
  });

  var nb = $("#newBoardBtn"); if (nb) nb.addEventListener("click", newBoard);
  var nt = $("#newTaskBtn"); if (nt) nt.addEventListener("click", function () { addTask(B().columns[0].id); });

  render();
})();
