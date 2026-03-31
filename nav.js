// nav.js — injects the sticky nav into every page
document.addEventListener('DOMContentLoaded', () => {
  const depth = document.body.dataset.depth || '';
  const root = depth === '1' ? '../' : '';

  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="nav-logo" href="${root}index.html">AP<span>★</span>CRAM</a>
    <a class="nav-link bio" href="${root}bio/index.html">AP Bio</a>
    <a class="nav-link gov" href="${root}gov/index.html">AP Gov</a>
    <a class="nav-link lists" href="${root}lists/index.html">Reference Lists</a>
  `;
  document.body.prepend(nav);

  const footer = document.createElement('footer');
  footer.textContent = '★ APCRAM — a study framework. All content slots are empty. Fill them with glory.';
  document.body.appendChild(footer);
});
