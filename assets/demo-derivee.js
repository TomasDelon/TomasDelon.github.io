/* Démo : la dérivée comme pente de la tangente.
   f(x) = x³/6 − x  →  f'(x) = x²/2 − 1
   Le point se déplace au doigt, à la souris ou avec le curseur (clavier). */
(function () {
  const canvas = document.getElementById("demo-derivee");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const slider = document.getElementById("demo-x");
  const outX = document.getElementById("demo-out-x");
  const outF = document.getElementById("demo-out-f");
  const outD = document.getElementById("demo-out-d");
  const note = document.getElementById("demo-note");

  const f = (x) => x * x * x / 6 - x;
  const df = (x) => x * x / 2 - 1;

  const X0 = -3.4, X1 = 3.4, Y0 = -2.4, Y1 = 2.4;
  let W = 560, H = 360, x = 0.8;

  const css = getComputedStyle(document.documentElement);
  const C = {
    grid: css.getPropertyValue("--grid").trim() || "rgba(30,79,216,.11)",
    ink: css.getPropertyValue("--ink").trim() || "#16202b",
    ink2: css.getPropertyValue("--ink-2").trim() || "#4a5563",
    encre: css.getPropertyValue("--encre").trim() || "#1e4fd8",
    rouge: css.getPropertyValue("--rouge").trim() || "#c8372d",
    rule: css.getPropertyValue("--rule").trim() || "#c9d1d9",
  };

  const px = (vx) => (vx - X0) / (X1 - X0) * W;
  const py = (vy) => H - (vy - Y0) / (Y1 - Y0) * H;
  const vx = (p) => X0 + p / W * (X1 - X0);

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    W = Math.max(280, Math.round(rect.width));
    H = Math.round(W * 0.64);
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* quadrillage */
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
    for (let gx = Math.ceil(X0); gx <= X1; gx++) { ctx.beginPath(); ctx.moveTo(px(gx), 0); ctx.lineTo(px(gx), H); ctx.stroke(); }
    for (let gy = Math.ceil(Y0); gy <= Y1; gy++) { ctx.beginPath(); ctx.moveTo(0, py(gy)); ctx.lineTo(W, py(gy)); ctx.stroke(); }

    /* axes */
    ctx.strokeStyle = C.rule; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(0, py(0)); ctx.lineTo(W, py(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(px(0), 0); ctx.lineTo(px(0), H); ctx.stroke();
    ctx.fillStyle = C.ink2; ctx.font = "12px JetBrains Mono, monospace";
    for (let gx = Math.ceil(X0); gx <= X1; gx++) if (gx) ctx.fillText(String(gx), px(gx) - 4, py(0) + 14);
    for (let gy = Math.ceil(Y0); gy <= Y1; gy++) if (gy) ctx.fillText(String(gy), px(0) + 5, py(gy) + 4);

    /* courbe */
    ctx.strokeStyle = C.encre; ctx.lineWidth = 2.2; ctx.beginPath();
    for (let p = 0; p <= W; p++) { const X = vx(p); const Y = py(f(X)); if (p === 0) ctx.moveTo(p, Y); else ctx.lineTo(p, Y); }
    ctx.stroke();

    /* tangente */
    const y = f(x), m = df(x);
    const xa = x - 1.6, xb = x + 1.6;
    ctx.strokeStyle = C.rouge; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(px(xa), py(y + m * (xa - x))); ctx.lineTo(px(xb), py(y + m * (xb - x))); ctx.stroke();

    /* petit triangle de pente (Δx = 1) quand il reste de la place */
    if (Math.abs(m) > 0.15 && x + 1 < X1 - 0.3 && Math.abs(y + m) < Y1 - 0.2 && Math.abs(px(x + 1) - px(0)) > 34) {
      ctx.setLineDash([3, 3]); ctx.strokeStyle = C.ink2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(px(x), py(y)); ctx.lineTo(px(x + 1), py(y)); ctx.lineTo(px(x + 1), py(y + m)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = C.ink2; ctx.font = "12px JetBrains Mono, monospace";
      ctx.fillText("1", px(x + 0.5) - 3, py(y) + (m >= 0 ? 14 : -5));
      ctx.fillText("f′(x)", px(x + 1) + 5, py(y + m / 2) + 4);
    }

    /* point */
    ctx.fillStyle = C.rouge; ctx.beginPath(); ctx.arc(px(x), py(y), 6, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();

    /* lectures */
    outX.textContent = x.toFixed(2);
    outF.textContent = y.toFixed(2);
    outD.textContent = m.toFixed(2);
    if (Math.abs(m) < 0.06) note.textContent = "Tangente horizontale : f′(x) = 0, la courbe passe par un extremum.";
    else if (m > 0) note.textContent = "Pente positive : f est croissante ici, f′(x) > 0.";
    else note.textContent = "Pente négative : f est décroissante ici, f′(x) < 0.";
  }

  function setX(nx) {
    x = Math.min(X1 - 0.1, Math.max(X0 + 0.1, nx));
    slider.value = x.toFixed(2);
    draw();
  }

  /* glisser */
  let dragging = false;
  const fromEvent = (e) => { const r = canvas.getBoundingClientRect(); return vx((e.clientX - r.left) * W / r.width); };
  canvas.addEventListener("pointerdown", (e) => { dragging = true; canvas.setPointerCapture(e.pointerId); setX(fromEvent(e)); });
  canvas.addEventListener("pointermove", (e) => { if (dragging) setX(fromEvent(e)); });
  canvas.addEventListener("pointerup", () => { dragging = false; });
  canvas.addEventListener("pointercancel", () => { dragging = false; });

  /* curseur (clavier, mobile) */
  slider.min = (X0 + 0.1).toFixed(2); slider.max = (X1 - 0.1).toFixed(2); slider.step = "0.01";
  slider.addEventListener("input", () => setX(parseFloat(slider.value)));

  window.addEventListener("resize", resize);
  slider.value = x.toFixed(2);
  resize();
})();
