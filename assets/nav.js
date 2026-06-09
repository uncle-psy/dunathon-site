/* DUNATHON shared nav: mobile toggle + active-link highlighting. */
(function () {
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (path === '') path = 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });
  var burger = document.querySelector('.nav-burger');
  var mobile = document.querySelector('.nav-mobile');
  if (burger && mobile) {
    burger.addEventListener('click', function () { mobile.classList.toggle('open'); });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobile.classList.remove('open'); });
    });
  }
})();
