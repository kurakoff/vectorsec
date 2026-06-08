import { useEffect, useRef } from "react";

type Mod = { label: string; a: number; r: number; c: string };
type Threat = { x: number; y: number; tx: number; ty: number; spd: number; r: number; a: number; blocked: boolean; bAge: number };
type Pulse = { r: number; a: number };
type Clean = { x: number; y: number; vx: number; vy: number; r: number; a: number };

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, cx = 0, cy = 0, T = 0, raf = 0, S = 1, sr = 112;
    let running = true;
    const LS = 90, SR = 112;

    // 8 модулей — созвездие вокруг ядра
    const MODS: Mod[] = [
      { label: "NGFW", a: -90, r: 172, c: "#60A5FA" },
      { label: "IDS / IPS", a: -45, r: 186, c: "#60A5FA" },
      { label: "DPI", a: 0, r: 172, c: "#60A5FA" },
      { label: "VPN", a: 45, r: 186, c: "#60A5FA" },
      { label: "WAF", a: 90, r: 172, c: "#34D399" },
      { label: "Anti-DDoS", a: 135, r: 186, c: "#34D399" },
      { label: "UTM", a: 180, r: 172, c: "#34D399" },
      { label: "Threat Intel", a: 225, r: 186, c: "#34D399" },
    ];
    const fDots = MODS.map((_, i) => ({ p: i / MODS.length, sp: 0.002 + Math.random() * 0.002 }));
    let threats: Threat[] = [], pulses: Pulse[] = [], cleanPkts: Clean[] = [];
    let lPulse = 0, lThreat = 0, lClean = 0;

    // Реальные пути логотипа V (viewBox 0 0 29 29)
    const LOGO_L = new Path2D("M7.49597 0H1.49164C0.797714 0 0.33956 0.721835 0.634941 1.34975L13.6419 28.9999L12.6121 17.6471L8.4149 0.718911C8.31019 0.296581 7.93109 0 7.49597 0Z");
    const LOGO_R = new Path2D("M20.6344 0H26.6387C27.3327 0 27.7908 0.721835 27.4954 1.34975L14.4884 28.9999L15.5183 17.6471L19.7155 0.718911C19.8202 0.296581 20.1993 0 20.6344 0Z");

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = cv!.offsetWidth; H = cv!.offsetHeight;
      cv!.width = Math.round(W * dpr); cv!.height = Math.round(H * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      // центрируем анимацию по блоку .hero-right (десктоп — справа, мобайл — нижняя строка)
      const right = rightRef.current;
      if (right) {
        const cr = cv!.getBoundingClientRect();
        const rr = right.getBoundingClientRect();
        cx = rr.left - cr.left + rr.width / 2;
        cy = rr.top - cr.top + rr.height / 2;
        S = Math.max(0.55, Math.min(1, Math.min(rr.width, rr.height) / 430));
      } else {
        cx = W * 0.71; cy = H * 0.5; S = 1;
      }
      sr = SR * S;
    }

    function rrect(x: number, y: number, w: number, h: number, r: number) {
      ctx!.beginPath();
      ctx!.moveTo(x + r, y); ctx!.lineTo(x + w - r, y); ctx!.arcTo(x + w, y, x + w, y + r, r);
      ctx!.lineTo(x + w, y + h - r); ctx!.arcTo(x + w, y + h, x + w - r, y + h, r);
      ctx!.lineTo(x + r, y + h); ctx!.arcTo(x, y + h, x, y + h - r, r);
      ctx!.lineTo(x, y + r); ctx!.arcTo(x, y, x + r, y, r);
      ctx!.closePath();
    }

    function drawLogo(x: number, y: number, size: number, glow: number) {
      const sc = size / 29;
      const rd = ctx!.createRadialGradient(x, y, 0, x, y, size * 2.2);
      rd.addColorStop(0, `rgba(37,99,235,${0.22 + glow * 0.22})`);
      rd.addColorStop(0.5, `rgba(37,99,235,${0.07 + glow * 0.06})`);
      rd.addColorStop(1, "rgba(37,99,235,0)");
      ctx!.fillStyle = rd;
      ctx!.beginPath(); ctx!.arc(x, y, size * 2.2, 0, Math.PI * 2); ctx!.fill();
      ctx!.save();
      ctx!.translate(x - 14.5 * sc, y - 14.5 * sc);
      ctx!.scale(sc, sc);
      ctx!.shadowColor = `rgba(255,255,255,${0.35 * glow})`;
      ctx!.shadowBlur = 18;
      ctx!.fillStyle = `rgba(255,255,255,${0.94 + glow * 0.06})`;
      ctx!.fill(LOGO_L); ctx!.fill(LOGO_R);
      ctx!.shadowBlur = 0;
      ctx!.restore();
    }

    function drawNode(mx: number, my: number, mod: Mod) {
      ctx!.save();
      ctx!.font = "600 11px Manrope,sans-serif";
      const tw = ctx!.measureText(mod.label).width;
      const bw = tw + 34, bh = 26;
      rrect(mx - bw / 2, my - bh / 2, bw, bh, 7);
      ctx!.fillStyle = "rgba(5,16,38,0.84)"; ctx!.fill();
      ctx!.strokeStyle = mod.c === "#34D399" ? "rgba(52,211,153,0.32)" : "rgba(96,165,250,0.32)";
      ctx!.lineWidth = 1; ctx!.stroke();
      ctx!.beginPath(); ctx!.arc(mx - bw / 2 + 9, my, 3, 0, Math.PI * 2);
      ctx!.fillStyle = mod.c; ctx!.fill();
      ctx!.fillStyle = "rgba(255,255,255,0.85)";
      ctx!.textAlign = "left";
      ctx!.fillText(mod.label, mx - bw / 2 + 18, my + 4);
      ctx!.restore();
    }

    function frame(ts: number) {
      T = ts / 1000;
      ctx!.clearRect(0, 0, W, H);

      // виньетка от центра анимации
      const vg = ctx!.createRadialGradient(cx, cy, 0, cx, cy, W * 0.38);
      vg.addColorStop(0, "rgba(37,99,235,0.05)");
      vg.addColorStop(0.6, "rgba(37,99,235,0.01)");
      vg.addColorStop(1, "rgba(37,99,235,0)");
      ctx!.fillStyle = vg; ctx!.fillRect(0, 0, W, H);

      // сетка
      ctx!.strokeStyle = "rgba(255,255,255,0.024)"; ctx!.lineWidth = 1;
      const gs = 54;
      for (let x = gs; x < W; x += gs) { ctx!.beginPath(); ctx!.moveTo(x, 0); ctx!.lineTo(x, H); ctx!.stroke(); }
      for (let y = gs; y < H; y += gs) { ctx!.beginPath(); ctx!.moveTo(0, y); ctx!.lineTo(W, y); ctx!.stroke(); }

      if (!reduced) {
        // спавн угроз с краёв, наводятся на лого
        if (T - lThreat > 1.0) {
          lThreat = T;
          const edge = Math.floor(Math.random() * 4);
          let sx, sy;
          if (edge === 0) { sx = Math.random() * W; sy = -18; }
          else if (edge === 1) { sx = W + 18; sy = Math.random() * H; }
          else if (edge === 2) { sx = Math.random() * W; sy = H + 18; }
          else { sx = -18; sy = Math.random() * H; }
          threats.push({ x: sx, y: sy, tx: cx, ty: cy, spd: 1.4 + Math.random() * 0.8, r: 2.5 + Math.random() * 1.5, a: 0.88, blocked: false, bAge: 0 });
        }
        if (T - lClean > 0.65) {
          lClean = T;
          const ang = Math.random() * Math.PI * 2;
          cleanPkts.push({ x: cx + Math.cos(ang) * (sr + 8), y: cy + Math.sin(ang) * (sr + 8), vx: Math.cos(ang) * (1.6 + Math.random()), vy: Math.sin(ang) * (1.6 + Math.random()), r: 2 + Math.random() * 1.5, a: 0.6 });
        }
        if (T - lPulse > 3.8) { lPulse = T; pulses.push({ r: sr, a: 0.55 }); }
      }

      // пульсы
      pulses = pulses.filter((p) => {
        p.r += 2.5; p.a *= 0.954;
        ctx!.beginPath(); ctx!.arc(cx, cy, p.r, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(96,165,250,${p.a})`; ctx!.lineWidth = 1.3; ctx!.stroke();
        return p.a > 0.012;
      });

      // кольца-щит
      ctx!.save();
      ctx!.setLineDash([5, 10]); ctx!.strokeStyle = "rgba(96,165,250,0.09)"; ctx!.lineWidth = 1;
      ctx!.beginPath(); ctx!.arc(cx, cy, sr + 56, 0, Math.PI * 2); ctx!.stroke();
      ctx!.restore();
      ctx!.save(); ctx!.translate(cx, cy); ctx!.rotate(T * 0.11);
      ctx!.setLineDash([3, 12]); ctx!.strokeStyle = "rgba(96,165,250,0.17)"; ctx!.lineWidth = 1.5;
      ctx!.beginPath(); ctx!.arc(0, 0, sr + 18, 0, Math.PI * 2); ctx!.stroke();
      ctx!.setLineDash([]); ctx!.restore();

      // связи модулей + бегущие точки
      MODS.forEach((mod, i) => {
        const rad = (mod.a * Math.PI) / 180;
        const mx = cx + Math.cos(rad) * mod.r * S, my = cy + Math.sin(rad) * mod.r * S;
        const lg = ctx!.createLinearGradient(cx, cy, mx, my);
        lg.addColorStop(0, "rgba(96,165,250,0.22)"); lg.addColorStop(1, "rgba(96,165,250,0.04)");
        ctx!.beginPath(); ctx!.moveTo(cx, cy); ctx!.lineTo(mx, my);
        ctx!.strokeStyle = lg; ctx!.lineWidth = 1; ctx!.stroke();
        const fd = fDots[i];
        if (!reduced) { fd.p += fd.sp; if (fd.p > 1) fd.p -= 1; }
        const fx = cx + (mx - cx) * fd.p, fy = cy + (my - cy) * fd.p;
        ctx!.beginPath(); ctx!.arc(fx, fy, 2.2, 0, Math.PI * 2);
        ctx!.fillStyle = mod.c === "#34D399" ? "rgba(52,211,153,0.85)" : "rgba(96,165,250,0.85)";
        ctx!.fill();
        drawNode(mx, my, mod);
      });

      // чистые пакеты
      cleanPkts = cleanPkts.filter((p) => {
        p.x += p.vx; p.y += p.vy; p.a -= 0.007;
        if (p.a <= 0 || p.x > W + 40 || p.y < -40 || p.y > H + 40) return false;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(96,165,250,${p.a})`; ctx!.fill();
        ctx!.beginPath(); ctx!.moveTo(p.x, p.y); ctx!.lineTo(p.x - p.vx * 12, p.y - p.vy * 12);
        ctx!.strokeStyle = `rgba(96,165,250,${p.a * 0.25})`; ctx!.lineWidth = 1; ctx!.stroke();
        return true;
      });

      // угрозы — наведение на лого, блок на щите
      threats = threats.filter((t) => {
        if (t.blocked) {
          t.bAge++;
          ctx!.beginPath(); ctx!.arc(t.x, t.y, t.r * (1 + t.bAge * 0.3), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(251,113,133,${Math.max(0, 0.5 - t.bAge * 0.048)})`; ctx!.fill();
          return t.bAge < 12;
        }
        const dx = t.tx - t.x, dy = t.ty - t.y, dist = Math.sqrt(dx * dx + dy * dy);
        t.x += (dx / dist) * t.spd; t.y += (dy / dist) * t.spd;
        if (dist < sr) { t.blocked = true; pulses.push({ r: sr * 0.8, a: 0.48 }); return true; }
        ctx!.beginPath(); ctx!.arc(t.x, t.y, t.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(251,113,133,${t.a})`; ctx!.fill();
        ctx!.beginPath(); ctx!.moveTo(t.x, t.y); ctx!.lineTo(t.x - (dx / dist) * 14, t.y - (dy / dist) * 14);
        ctx!.strokeStyle = "rgba(251,113,133,0.20)"; ctx!.lineWidth = 1; ctx!.stroke();
        return true;
      });

      // лого
      const pulse = reduced ? 0.5 : Math.sin(T * 1.4) * 0.5 + 0.5;
      drawLogo(cx, cy, LS * S, pulse);

      if (running && !reduced) raf = requestAnimationFrame(frame);
    }

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas className="hero-canvas" ref={canvasRef}></canvas>
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            Российская разработка · Astra Linux · DPDK + VPP
          </div>
          <h1>
            8 продуктов безопасности<br />
            <em>на одной платформе</em>
          </h1>
          <p className="hero-lead">
            Единый dataplane обслуживает все модули. Любая комбинация — одна
            консоль, один API. До 96&nbsp;Гбит/с на порт.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-blue">
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              Получить демо-доступ
            </a>
            <a href="#modules" className="btn btn-ghost">
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              Смотреть модули
            </a>
          </div>
        </div>
        <div className="hero-right" ref={rightRef}></div>
      </div>
    </section>
  );
}
