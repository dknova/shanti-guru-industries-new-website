// Shared PDF document-list engine for the Meetings, Code of Conduct and Policies pages.
// Each document is a card that opens its PDF. Add or replace PDFs in the documents/ folder
// and list them in the DOCPAGE config at the top of each page (see documents/README.txt).
(() => {
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s).replace(
      /[&<>"]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
    );
  const SV = (p) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    p +
    "</svg>";
  const IC = {
    cal: SV(
      '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    ),
    check: SV(
      '<path d="M8.5 12l2.5 2.5L16 9.5"/><circle cx="12" cy="12" r="9"/>',
    ),
    mega: SV(
      '<path d="M3 11v3l12 5V6L3 11z"/><path d="M15 9a3 3 0 010 6M6 15l1 5h3l-1-4"/>',
    ),
    doc: SV(
      '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 14h6M9 17.5h6"/>',
    ),
    mail: SV(
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    ),
    shield: SV(
      '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
    ),
    clock: SV('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  };
  const cfg = window.DOCPAGE || { cats: [] },
    CAT = cfg.cats;
  let ci = 0;
  const cnt = (n) => n + (n === 1 ? " document" : " documents");
  function draw() {
    const c = CAT[ci],
      ft = $("#ft"),
      fp = $("#fp");
    if (CAT.length > 1) {
      ft.innerHTML = CAT.map(
        (x, i) =>
          '<button type="button" role="tab" aria-selected="' +
          (i === ci) +
          '" data-i="' +
          i +
          '" class="' +
          (i === ci ? "on" : "") +
          '"><span class="fti">' +
          IC[x.ic || "doc"] +
          '</span><span class="ftt"><b>' +
          esc(x.n) +
          "</b><small>" +
          cnt(x.docs.length) +
          "</small></span></button>",
      ).join("");
    } else {
      ft.style.display = "none";
    }
    const list = c.docs
      .map(
        (d, i) =>
          '<a class="fd" style="--i:' +
          i +
          '" href="' +
          esc(d.u) +
          '" target="_blank" rel="noopener"><span class="fdi">' +
          IC.doc +
          '</span><span class="fdx"><b>' +
          esc(d.t) +
          "</b><small>" +
          esc(d.m) +
          (d.s ? " &middot; " + esc(d.s) : "") +
          '</small></span><span class="fdb">PDF<u>&nearr;</u></span></a>',
      )
      .join("");
    const empty = c.docs.length
      ? ""
      : '<div class="fem">No documents are available here yet.</div>';
    fp.innerHTML =
      '<div class="fph"><h2>' +
      esc(c.n).replace(/(\S+)$/, "<em>$1</em>") +
      "</h2><p>" +
      esc(c.d) +
      '</p></div><div class="fdl">' +
      list +
      empty +
      "</div>";
  }
  $("#ft").onclick = (e) => {
    const b = e.target.closest("button");
    if (b) {
      ci = +b.dataset.i;
      draw();
    }
  };
  draw();
})();
