import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;

    function resize() {
      w = cv!.width = cv!.offsetWidth;
      h = cv!.height = cv!.offsetHeight;
    }
    function init() {
      const n = Math.max(18, Math.floor((w * h) / 16000));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
      }));
    }
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(147,197,253,${0.12 * (1 - d / 130)})`;
            ctx!.lineWidth = 0.7;
            ctx!.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(147,197,253,.35)";
        ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      resize();
      init();
    };

    resize();
    init();
    draw();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <div className="badge-dot"></div>
          Российская разработка · NGFW · Реестр Минцифры
        </div>
        <h1>Вектор — российская <em>модульная</em> платформа<br />сетевой безопасности класса NGFW</h1>
        <div className="hero-feats">
          <div className="hero-feat">
            <div className="feat-bullet"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>
            Модульная архитектура с гибким лицензированием
          </div>
          <div className="hero-feat">
            <div className="feat-bullet"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>
            Производительность до 100 Гбит/с на базе DPDK/VPP
          </div>
          <div className="hero-feat">
            <div className="feat-bullet"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>
            Глубокая интеграция с Astra Linux на уровне ядра
          </div>
          <div className="hero-feat">
            <div className="feat-bullet"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>
            Соответствие требованиям ФСТЭК, ФСБ России и 187-ФЗ
          </div>
        </div>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-blue">
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            Получить демо-доступ
          </a>
          <a href="#" className="btn btn-ghost">
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
            Скачать техническую презентацию
          </a>
        </div>
      </div>
    </section>
  );
}
