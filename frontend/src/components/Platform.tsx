import { useEffect, useRef, useState } from "react";

// Дизайн-размер дашборда (масштабируется под ширину контейнера)
const DASH_W = 1320;
const DASH_H = 880;
const CROP = 0.62; // показываем верхние ~62%, низ уходит в градиент

export default function Platform() {
  const vpRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DASH_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="platform-s" id="platform">
      <div className="inner">
        <div className="plat-head">
          <h2 className="sec-h fu" style={{ marginBottom: 0 }}>
            Единая модульная<br />платформа безопасности
          </h2>
          <p className="sec-sub fu d1" style={{ marginBottom: 0, alignSelf: "end" }}>
            Вектор объединяет все функции защиты в единой высокопроизводительной
            платформе. Включайте только нужные модули, масштабируйте постепенно.
          </p>
        </div>

        <div className="plat-showcase fu d2">
          <div
            className="plat-viewport"
            ref={vpRef}
            style={{ height: `${DASH_H * scale * CROP}px` }}
          >
            <iframe
              className="plat-frame"
              src="/dashboard.html?v=3"
              title="Интерфейс платформы Вектор"
              loading="lazy"
              scrolling="no"
              tabIndex={-1}
              aria-hidden="true"
              style={{ width: DASH_W, height: DASH_H, transform: `scale(${scale})` }}
            />
          </div>
          <div className="plat-fade"></div>
        </div>
      </div>
    </section>
  );
}
