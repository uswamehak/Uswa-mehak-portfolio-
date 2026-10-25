/* =====================================================================
   EDIT THIS SECTION ONLY
   - Photos live in an "images" folder: look1.png ... look6.png
     (change a `src` below if yours are named differently).
   - Captions stay 1-2 sentences, as the assignment requires.
   - `emphasis` drives the OCEAN radar charts: 1 (low) to 5 (high), in the
     order Openness, Conscientiousness, Extraversion, Agreeableness,
     Emotional Stability. It shows which trait a look highlights.
   ===================================================================== */
const PROFILE = {
  name: "Uswa Mehak",
  role: "Student",
  field: "Software Engineering"
};

const LOOKS = [
  {
    n: 1, src: "images/look1.png", name: "Business Formal", tag: "Required look",
    purpose: "Professional corporate look",
    a: ["OCEAN trait", "Conscientiousness"], b: ["Skill", "Professionalism & attention to detail"],
    primary: "Conscientiousness",
    emphasis: [2, 5, 3, 3, 4],
    caption: "This look represents Authenticity: maintaining steadfast personal values while projecting polished professionalism in a corporate tech setting.",
    outfit: ["Flowing black full-length abaya.", "Structured black handbag with a gold chain strap.", "Formal black footwear.   "],
    setting: "Modern tech office reception featuring a dark branded accent wall for Decode Labs warm architectural under-lighting, glass partitions, and polished stone floors.",
    map: { message: "Reliable, detail-focused", skill: "Professionalism", trait: "Conscientiousness" }
  },
  {
    n: 2, src: "images/look2.png", name: "Skills in Action", tag: "Required look",
    purpose: "Business-casual + demonstrating a skill",
    a: ["OCEAN trait", "Agreeableness"], b: ["Skill", "Collaborative problem-solving"],
    primary: "Agreeableness",
    emphasis: [3, 4, 3, 5, 3],
    caption: "This look represents Dedication: demonstrating deep focus and intellectual engagement in an academic environment.",
    outfit: ["Dark navy blue long-sleeved garment with gathered cuffs.", "Light blue headscarf featuring subtle bead accents.", "Contrasting black niqab."],
    setting: "Academic library environment featuring a wooden study desk, an open book, and tall bookshelves lined with technical reference materials.",
    map: { message: "Approachable, hands-on", skill: "Collaborative problem-solving", trait: "Agreeableness" }
  },
  {
    n: 3, src: "images/look3.png", name: "Field-Specific Wear", tag: "Required look",
    purpose: "Attire related to my career field",
    a: ["Role", "Software Engineer"], b: ["Skill", "Technical expertise "],
    primary: null,
    emphasis: [4, 4, 2, 3, 3],
    caption: "This look represents Empowerment: projecting confidence and a readiness to engage at a professional leadership and networking event.",
    outfit: ["Flowing black full-length abaya", "Contrasting black niqab.", "Structured black handbag with a gold chain strap."],
    setting: "Professional conference environment featuring a vibrant NextGen Foundation backdrop advocating for women in tech, illuminated by floor uplights on a polished tile floor.",
    map: { message: "Fits tech-team culture", skill: "Software / Game Developer", trait: "Role-focused" }
  },
  {
    n: 4, src: "images/look4.png", name: "Creative / Tech Professional", tag: "Required look",
    purpose: "Modern professional look",
    a: ["OCEAN trait", "Openness"], b: ["Skill", "Creative problem-solving & innovation"],
    primary: "Openness",
    emphasis: [5, 3, 4, 3, 3],
    caption: "This look represents Purpose: aligning personal drive with institutional values in an academic or professional setting.",
    outfit: ["Dark navy blue long-sleeved garment.", "Contrasting black niqab.", "Silver laptop held under the arm."],
    setting: "Institutional environment featuring a wall display outlining organizational Vision,Mission, and core Values.",
    map: { message: "Innovative, design-aware", skill: "Creative problem-solving", trait: "Openness" }
  },
  {
    n: 5, src: "images/look5.png", name: "Remote Work", tag: "Chosen look",
    purpose: "Working professionally from home",
    a: ["OCEAN trait", "Emotional Stability"], b: ["Skill", "Self-management & virtual communication"],
    primary: "Emotional Stability",
    emphasis: [3, 4, 2, 3, 5],
    caption: "This look represents Diligence: immersing oneself in research and technical work in an academic environment.",
    outfit: ["Deep green long-sleeved garment with gathered cuffs.", "Matching deep green headscarf featuring subtle bead embellishments.", "Contrasting black niqab.   "],
    setting: "Academic library environment featuring a wooden study desk, a silver laptop in use, and tall bookshelves lined with technical reference materials.",
    map: { message: "Polished and self-managed", skill: "Virtual communication", trait: "Emotional Stability" }
  },
  {
    n: 6, src: "images/look6.png", name: "Presentation / Interview", tag: "Chosen look",
    purpose: "Presenting ideas or interviewing",
    a: ["OCEAN trait", "Extraversion"], b: ["Skill", "Public speaking & communication"],
    primary: "Extraversion",
    emphasis: [3, 4, 5, 3, 4],
    caption: "This look represents Scholarship: engaging deeply with academic materials in a quiet study environment.",
    outfit: ["Dark long-sleeved garment.", "Dusty blue headscarf.", "Contrasting black niqab"],
    setting: "Academic library environment featuring a polished wooden study desk, an open textbook, and tall wooden bookshelves lined with reference materials.",
    map: { message: "Prepared and credible", skill: "Public speaking", trait: "Extraversion" }
  }
];

const OCEAN = [
  ["Openness", "Curious, creative, open to new ideas"],
  ["Conscientiousness", "Organized, dependable, detail-focused"],
  ["Extraversion", "Confident, expressive, energized by people"],
  ["Agreeableness", "Cooperative, respectful, team-minded"],
  ["Emotional Stability", "Calm, resilient, steady under pressure"]
];

const TAKEAWAYS = [
  ["Attire is communication", "Every outfit sends a message about reliability, creativity or confidence before I say a word."],
  ["Context shapes the choice", "Formal, business-casual, field-specific and remote settings each call for a different level of polish."],
  ["My core stays consistent", "Skills and character remain the same; what changes is how I present them to each audience."]
];

/* ============== Code below: no need to edit ============== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad = n => String(n).padStart(2, "0");
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const SERIES = ["#c43a73", "#f0885a", "#8e4fb8", "#2fa39a", "#e6a417", "#5b7bd9"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.title = `${PROFILE.name} | Professional Image Portfolio`;
$("#brand").textContent = PROFILE.name;

/* ---------- placeholder (inline SVG, 4:5) ---------- */
function placeholder(l) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
    <rect width="800" height="1000" fill="#FFE8EE"/>
    <circle cx="400" cy="330" r="120" fill="#F7B8CC"/>
    <path d="M160 760 A240 240 0 0 1 640 760 Z" fill="#F7B8CC"/>
    <text x="400" y="835" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="#8A2552" text-anchor="middle" letter-spacing="5">LOOK ${pad(l.n)}</text>
    <text x="400" y="885" font-family="Arial,sans-serif" font-size="34" font-weight="700" fill="#8A2552" text-anchor="middle">${esc(l.name)}</text>
    <text x="400" y="935" font-family="Arial,sans-serif" font-size="24" fill="#86596f" text-anchor="middle">${esc(l.src)}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
const imgTag = (l, cls = "") => `<img class="${cls}" data-look="${l.n}" src="${l.src}" alt="${esc(l.name)} photo" draggable="false" />`;

/* ---------- radar chart (SVG) ---------- */
function radarSVG(id, size, labels = true, pad = 0, font = 14) {
  const c = size / 2, R = size * (labels ? 0.34 : 0.42);
  const pt = (i, v) => {
    const a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
    return [c + Math.cos(a) * R * v, c + Math.sin(a) * R * v];
  };
  const ring = v => OCEAN.map((_, i) => pt(i, v).join(",")).join(" ");
  const axes = OCEAN.map((o, i) => {
    const [x, y] = pt(i, 1), [lx, ly] = pt(i, labels ? 1.2 : 1);
    const anchor = Math.abs(lx - c) < 4 ? "middle" : lx > c ? "start" : "end";
    return `<line class="rd-axis" x1="${c}" y1="${c}" x2="${x}" y2="${y}"/>` +
      (labels ? `<g class="rd-label" data-axis="${i}" tabindex="0" role="button" aria-label="${o[0]}">
        <text x="${lx}" y="${ly + font * .3}" text-anchor="${anchor}" style="font-size:${font}px">${o[0] === "Emotional Stability" ? "Emotional Stab." : o[0]}</text></g>` : "");
  }).join("");
  const dots = OCEAN.map((_, i) => { const [x, y] = pt(i, 1); return `<circle class="rd-dot" data-axis="${i}" cx="${x}" cy="${y}" r="${labels ? 5 : 3}"/>`; }).join("");
  return {
    html: `<svg class="radar" id="${id}" viewBox="${-pad} 0 ${size + pad * 2} ${size}" role="img" aria-label="OCEAN trait emphasis radar chart">
      ${[0.2, 0.4, 0.6, 0.8, 1].map(v => `<polygon class="rd-ring" points="${ring(v)}"/>`).join("")}
      ${axes}<g class="rd-series"></g>${dots}</svg>`,
    poly: (vals) => vals.map((v, i) => pt(i, v / 5).join(",")).join(" ")
  };
}
const radarPoly = (vals, size, labels = true) => {
  const c = size / 2, R = size * (labels ? 0.34 : 0.42);
  return vals.map((v, i) => {
    const a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
    return [c + Math.cos(a) * R * v / 5, c + Math.sin(a) * R * v / 5].join(",");
  }).join(" ");
};

/* ---------- slides ---------- */
const SLIDES = [];

/* 1. title */
SLIDES.push({
  label: "Title", tone: "dark", html: `
  <div class="s-title">
    <div class="st-text">
      <p class="kicker rv" style="--i:0">Professional Image Portfolio</p>
      <h1 class="rv" style="--i:1">Attire,<br /><em>translated.</em></h1>
      <p class="st-sub rv" style="--i:2">How six outfits communicate skills, a career role and personality, mapped to the OCEAN traits.</p>
      <p class="st-who rv" style="--i:3"><strong>${esc(PROFILE.name)}</strong> &nbsp;|&nbsp; ${esc(PROFILE.role)} &nbsp;|&nbsp; ${esc(PROFILE.field)}</p>
      <div class="st-actions rv" style="--i:4">
        <button class="btn btn-primary" data-go="next" type="button">Start presentation &rarr;</button>
        <button class="btn btn-ghost" data-go="menu" type="button">All slides</button>
      </div>
    </div>
    <div class="st-stack rv" style="--i:2" aria-label="Preview photos">
      ${[LOOKS[0], LOOKS[3], LOOKS[5]].map((l, k) => `
        <button class="polaroid pol-${k}" data-jump-look="${l.n}" type="button" aria-label="Open look ${l.n}: ${esc(l.name)}">
          ${imgTag(l)}<span class="pol-cap">${pad(l.n)} &middot; ${esc(l.name)}</span>
        </button>`).join("")}
    </div>
  </div>`
});

/* 2. overview */
SLIDES.push({
  label: "Overview", tone: "cream", html: `
  <div class="s-over">
    <p class="kicker rv" style="--i:0">Overview</p>
    <h2 class="rv" style="--i:1">Six looks, one consistent professional identity</h2>
    <p class="lede rv" style="--i:2">Four required looks plus two I chose. Pick any card to jump straight to it.</p>
    <div class="ov-grid">
      ${LOOKS.map((l, k) => `
        <button class="ov-card rv" style="--i:${k + 3}" data-jump-look="${l.n}" type="button">
          <span class="ov-img">${imgTag(l)}</span>
          <span class="ov-body">
            <span class="ov-tag ${l.tag.startsWith("Req") ? "req" : "cho"}">${pad(l.n)} &middot; ${l.tag}</span>
            <strong>${esc(l.name)}</strong>
            <span class="ov-trait">${esc(l.a[1])}</span>
          </span>
        </button>`).join("")}
    </div>
  </div>`
});

/* 3-8. looks */
LOOKS.forEach(l => {
  const rd = radarSVG(`mini-${l.n}`, 220, true, 80, 15);
  SLIDES.push({
    label: l.name, tone: l.n % 2 ? "cream" : "soda", look: l, html: `
    <div class="s-look">
      <div class="ph">
        <div class="tilt">
        <div class="flip rv" style="--i:0" tabindex="0" role="button" aria-pressed="false" aria-label="Photo of ${esc(l.name)}. Press to flip and see outfit details.">
          <div class="flip-in">
            <div class="face front">
              <div class="polaroid big">${imgTag(l)}<span class="tape"></span></div>
            </div>
            <div class="face back">
              <h4>Outfit &amp; styling</h4>
              <ul>${l.outfit.map(o => `<li>${esc(o)}</li>`).join("")}</ul>
              <h4>Photo setting</h4>
              <p>${esc(l.setting)}</p>
            </div>
          </div>
        </div>
        </div>
        <p class="hint rv" style="--i:1"><span aria-hidden="true">&#8635;</span> Click the photo to flip it</p>
      </div>

      <div class="tx">
        <span class="ghost-num" aria-hidden="true">${pad(l.n)}</span>
        <p class="kicker rv" style="--i:0">Look ${pad(l.n)} &middot; ${l.tag}</p>
        <h2 class="rv" style="--i:1">${esc(l.name)}</h2>
        <p class="purpose rv" style="--i:2">${esc(l.purpose)}</p>
        <div class="chips rv" style="--i:3">
          <span class="chip a"><b>${esc(l.a[0])}</b>${esc(l.a[1])}</span>
          <span class="chip b"><b>${esc(l.b[0])}</b>${esc(l.b[1])}</span>
        </div>
        <blockquote class="cap rv" style="--i:4"><b>Caption</b><p>${esc(l.caption)}</p></blockquote>
        <div class="mini rv" style="--i:5">
          ${rd.html}
          <div class="mini-note" id="note-${l.n}" aria-live="polite">
            <b>Trait emphasis</b>
            <p>${l.primary ? `This look highlights <strong>${esc(l.primary)}</strong>.` : `Role-focused look: <strong>${esc(l.a[1])}</strong>.`} Click a trait on the chart to read what it means.</p>
          </div>
        </div>
        <div class="print-extra">
          <p><b>Outfit &amp; styling:</b> ${l.outfit.map(esc).join("; ")}.</p>
          <p><b>Photo setting:</b> ${esc(l.setting)}</p>
        </div>
      </div>
    </div>`
  });
});

/* 9. OCEAN map */
const OCEAN_MAP = [
  { letter: "O", name: "Openness",          color: "#c43a73", looks: [[4, "Creative / Tech"]] },
  { letter: "C", name: "Conscientiousness", color: "#8a2552", looks: [[1, "Business Formal"]] },
  { letter: "E", name: "Extraversion",      color: "#e0608f", looks: [[6, "Presentation / Interview"]] },
  { letter: "A", name: "Agreeableness",     color: "#b23a69", looks: [[2, "Skills in Action"]] },
  { letter: "N", name: "Neuroticism",       color: "#4b1c3d", looks: [[5, "Remote Work"]] }
];
SLIDES.push({
  label: "OCEAN map", tone: "cream", html: `
  <div class="s-omap">
    <h2 class="rv" style="--i:0">The OCEAN Map</h2>
    <p class="om-sub rv" style="--i:1">Which look showcases which trait</p>
    <div class="om-grid">
      ${OCEAN_MAP.map((t, k) => `
        <article class="om-col rv" style="--i:${k + 2}; --c:${t.color}">
          <span class="om-letter">${t.letter}</span>
          <h3>${t.name}</h3>
          <ul>
            ${t.looks.map(([n, label]) => `
              <li><button type="button" class="om-item" data-jump-look="${n}" aria-label="Open look ${n}: ${esc(label)}">
                <span class="om-pic">${imgTag(LOOKS[n - 1])}</span><span class="om-label">${esc(label)}</span>
              </button></li>`).join("")}
          </ul>
        </article>`).join("")}
    </div>
  </div>`
});

/* ---------- render ---------- */
const deck = $("#deck");
const N = SLIDES.length;
deck.innerHTML = SLIDES.map((s, i) =>
  `<section class="slide tone-${s.tone}" id="slide-${i + 1}" data-i="${i}" aria-roledescription="slide" aria-label="${i + 1} of ${N}: ${esc(s.label)}">${s.html}</section>`
).join("");
const slideEls = $$(".slide");

/* photos: fall back to a placeholder if a file is missing */
$$("img[data-look]").forEach(img => {
  img.addEventListener("error", () => {
    const l = LOOKS[Number(img.dataset.look) - 1];
    img.onerror = null; img.src = placeholder(l);
  }, { once: true });
});

/* ---------- mini radars on look slides ---------- */
SLIDES.forEach((s, i) => {
  if (!s.look) return;
  const l = s.look, svg = $(`#mini-${l.n}`, slideEls[i]), g = $(".rd-series", svg);
  g.innerHTML = `<polygon class="rd-fill" points="${radarPoly(l.emphasis, 220)}" fill="${SERIES[l.n - 1]}" stroke="${SERIES[l.n - 1]}"/>`;
  const idx = l.primary ? OCEAN.findIndex(o => o[0] === l.primary) : -1;
  $$(".rd-dot", svg).forEach(d => d.classList.toggle("is-primary", Number(d.dataset.axis) === idx));
  const note = $(`#note-${l.n}`);
  const show = a => {
    $$(".rd-label", svg).forEach(x => x.classList.toggle("on", Number(x.dataset.axis) === a));
    note.innerHTML = `<b>${OCEAN[a][0]}</b><p>${OCEAN[a][1]}. ${a === idx ? "This is the trait this look highlights." : ""}</p>`;
  };
  $$(".rd-label", svg).forEach(x => {
    x.addEventListener("click", () => show(Number(x.dataset.axis)));
    x.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(Number(x.dataset.axis)); } });
  });
});

/* ---------- flip cards ---------- */
$$(".flip").forEach(f => {
  const toggle = () => { const on = f.classList.toggle("is-flipped"); f.setAttribute("aria-pressed", on); };
  f.addEventListener("click", toggle);
  f.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
});

/* ---------- gentle 3D: photo tilt + title-slide depth (mouse / trackpad only) ---------- */
if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
  $$(".tilt").forEach(t => {
    t.addEventListener("pointermove", e => {
      const r = t.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      t.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
      t.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
    });
    t.addEventListener("pointerleave", () => { t.style.removeProperty("--rx"); t.style.removeProperty("--ry"); });
  });
  const stack = $(".st-stack");
  if (stack) {
    stack.addEventListener("pointermove", e => {
      const r = stack.getBoundingClientRect();
      stack.style.setProperty("--px", (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(2));
      stack.style.setProperty("--py", (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(2));
    });
    stack.addEventListener("pointerleave", () => { stack.style.removeProperty("--px"); stack.style.removeProperty("--py"); });
  }
}

/* ---------- navigation ---------- */
let cur = 0;
const rail = $("#rail"), hudTitle = $("#hudTitle");
rail.innerHTML = SLIDES.map((s, i) => `<button type="button" class="seg" data-i="${i}" aria-label="Go to slide ${i + 1}: ${esc(s.label)}"><span>${esc(s.label)}</span></button>`).join("");
const segs = $$(".seg", rail);

function go(i, { instant = false } = {}) {
  i = Math.max(0, Math.min(N - 1, i));
  slideEls.forEach((el, k) => {
    el.dataset.pos = k === i ? "current" : k < i ? "past" : "future";
    el.classList.toggle("is-current", k === i);
    el.inert = k !== i;                                  // keeps hidden slides out of tab order
    el.setAttribute("aria-hidden", k !== i);
    if (k === i) el.scrollTop = 0;
  });
  segs.forEach((s, k) => { s.classList.toggle("done", k < i); s.classList.toggle("on", k === i); if (k === i) s.setAttribute("aria-current", "true"); else s.removeAttribute("aria-current"); });
  hudTitle.textContent = `${pad(i + 1)} / ${pad(N)}  ·  ${SLIDES[i].label}`;
  document.body.dataset.tone = SLIDES[i].tone;
  $("#prev").disabled = i === 0;
  $("#next").disabled = i === N - 1;
  if (cur !== i || instant) { try { history.replaceState(null, "", `#${i + 1}`); } catch { /* file:// or sandbox */ } }
  cur = i;
}
const jumpLook = n => go(SLIDES.findIndex(s => s.look && s.look.n === n));

$("#prev").addEventListener("click", () => go(cur - 1));
$("#next").addEventListener("click", () => go(cur + 1));
rail.addEventListener("click", e => { const b = e.target.closest(".seg"); if (b) go(Number(b.dataset.i)); });
$("#brand").addEventListener("click", () => go(0));

document.addEventListener("click", e => {
  const j = e.target.closest("[data-jump-look]");
  if (j) { jumpLook(Number(j.dataset.jumpLook)); return; }
  const g = e.target.closest("[data-go]");
  if (!g) return;
  const a = g.dataset.go;
  if (a === "next") go(cur + 1);
  if (a === "first") go(0);
  if (a === "menu") openMenu();
  if (a === "pdf") printDeck();
});
document.addEventListener("keydown", e => {
  if (e.target.closest("tr[data-jump-look]") && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); jumpLook(Number(e.target.closest("tr").dataset.jumpLook)); return; }
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key;
  if (k === "ArrowRight" || k === "PageDown") go(cur + 1);
  else if (k === "ArrowLeft" || k === "PageUp") go(cur - 1);
  else if (k === "Home") go(0);
  else if (k === "End") go(N - 1);
  else if (k === "f" || k === "F") toggleFS();
  else if (k === "g" || k === "G") (menu.hidden ? openMenu() : closeMenu());
  else if (k === "t" || k === "T") toggleTimer();
  else if (k === "Escape") closeMenu();
});

/* swipe */
let tx = null, ty = null;
deck.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
deck.addEventListener("touchend", e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) go(cur + (dx < 0 ? 1 : -1));
  tx = ty = null;
}, { passive: true });

/* ---------- all-slides menu ---------- */
const menu = $("#menu");
$("#menuList").innerHTML = SLIDES.map((s, i) => `<li><button type="button" data-i="${i}"><span class="m-n">${pad(i + 1)}</span><span>${esc(s.label)}</span></button></li>`).join("");
function openMenu() { menu.hidden = false; const b = $(`#menuList button[data-i="${cur}"]`); b && b.focus(); }
function closeMenu() { menu.hidden = true; }
$("#menuBtn").addEventListener("click", () => (menu.hidden ? openMenu() : closeMenu()));
$("#menuClose").addEventListener("click", closeMenu);
menu.addEventListener("click", e => {
  if (e.target === menu) closeMenu();
  const b = e.target.closest("#menuList button");
  if (b) { go(Number(b.dataset.i)); closeMenu(); }
});

/* ---------- full screen, timer, print ---------- */
function toggleFS() {
  try {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  } catch { /* not allowed here */ }
}
$("#fsBtn").addEventListener("click", toggleFS);

const timerEl = $("#timer");
let tStart = null, tick = null;
function renderTimer() {
  const s = Math.floor((Date.now() - tStart) / 1000);
  timerEl.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  timerEl.dataset.state = s >= 240 ? "over" : s >= 180 ? "warn" : "ok";   // 3-4 minute presentation
}
function toggleTimer() {
  if (timerEl.hidden) { timerEl.hidden = false; tStart = Date.now(); renderTimer(); tick = setInterval(renderTimer, 500); }
  else { timerEl.hidden = true; clearInterval(tick); }
}
$("#timerBtn").addEventListener("click", toggleTimer);
timerEl.addEventListener("click", () => { tStart = Date.now(); renderTimer(); });

function printDeck() { window.print(); }
/* the PDF always shows the full chart, even if a filter was left on */
window.addEventListener("beforeprint", () => { const all = $("#ocAll"); if (all) all.click(); });
$("#pdfBtn").addEventListener("click", printDeck);

/* ---------- start (honours #3 style links) ---------- */
const startAt = parseInt((location.hash || "").slice(1), 10);
go(Number.isFinite(startAt) ? startAt - 1 : 0, { instant: true });
window.addEventListener("hashchange", () => { const n = parseInt(location.hash.slice(1), 10); if (Number.isFinite(n) && n - 1 !== cur) go(n - 1); });
