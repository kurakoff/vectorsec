import { useEffect, useState } from "react";
import { MODS } from "../data/modules";

export default function Modules() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const open = activeModule !== null;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModule(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const d = activeModule !== null ? MODS[activeModule] : null;

  return (
    <section className="modules-s" id="modules">
      <div className="inner">
        <p className="sec-tag fu">Модули</p>
        <h2 className="sec-h fu d1">Модульная архитектура<br />для комплексной защиты</h2>
        <p className="sec-sub fu d2">Подключайте только необходимые модули. Расширяйте платформу по мере роста инфраструктуры без замены решения.</p>
        <div className="mod-grid">
          {/* 1 */}
          <div className="mod-card fu" onClick={() => setActiveModule(0)}>
            <div className="mod-ico b"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
            <div className="mod-name">Межсетевой экран NGFW</div>
            <div className="mod-desc">Stateful/stateless фильтрация с анализом приложений (L7)</div>
            <span className="mod-tag b">Базовый</span>
          </div>
          {/* 2 */}
          <div className="mod-card fu d1" onClick={() => setActiveModule(1)}>
            <div className="mod-ico b"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><circle cx="11" cy="11" r="3" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
            <div className="mod-name">IDS/IPS</div>
            <div className="mod-desc">Обнаружение и предотвращение вторжений — 50 000+ сигнатур</div>
            <span className="mod-tag b">Базовый</span>
          </div>
          {/* 3 */}
          <div className="mod-card fu d2" onClick={() => setActiveModule(2)}>
            <div className="mod-ico b"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg></div>
            <div className="mod-name">Глубокая инспекция DPI</div>
            <div className="mod-desc">L7-анализ и SSL/TLS-дешифровка до 100 Гбит/с</div>
            <span className="mod-tag b">Базовый</span>
          </div>
          {/* 4 */}
          <div className="mod-card fu d3" onClick={() => setActiveModule(3)}>
            <div className="mod-ico b"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
            <div className="mod-name">VPN-шлюз</div>
            <div className="mod-desc">IPSec/SSL VPN с поддержкой ГОСТ-шифрования</div>
            <span className="mod-tag b">Базовый</span>
          </div>
          {/* 5 */}
          <div className="mod-card adv fu d1" onClick={() => setActiveModule(4)}>
            <div className="mod-ico t"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
            <div className="mod-name">Web Application Firewall</div>
            <div className="mod-desc">Защита веб-приложений от OWASP Top 10, API-защита</div>
            <span className="mod-tag t">Расширенный</span>
          </div>
          {/* 6 */}
          <div className="mod-card adv fu d2" onClick={() => setActiveModule(5)}>
            <div className="mod-ico t"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></div>
            <div className="mod-name">UTM-управление</div>
            <div className="mod-desc">Единая консоль, REST API, ролевая модель доступа</div>
            <span className="mod-tag t">Расширенный</span>
          </div>
          {/* 7 */}
          <div className="mod-card adv fu d3" onClick={() => setActiveModule(6)}>
            <div className="mod-ico t"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="8 11 11 14 16 9" /></svg></div>
            <div className="mod-name">Anti-DDoS</div>
            <div className="mod-desc">Защита от DDoS-атак объёмом до 100 Гбит/с</div>
            <span className="mod-tag t">Расширенный</span>
          </div>
          {/* 8 */}
          <div className="mod-card adv fu d4" onClick={() => setActiveModule(7)}>
            <div className="mod-ico t"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
            <div className="mod-name">Threat Intelligence</div>
            <div className="mod-desc">Фиды угроз и обновление сигнатур в реальном времени</div>
            <span className="mod-tag t">Расширенный</span>
          </div>
        </div>

        {/* Tech cards */}
        <div className="tech-sec fu d2">
          <h3 className="tech-h">Технологическая база</h3>
          <div className="tech-cards">
            <div className="tech-card">
              <div className="tc-name">DPDK</div>
              <div className="tc-full">Data Plane Development Kit</div>
              <div className="tc-desc">Набор библиотек для высокоскоростной обработки пакетов в пространстве пользователя (userspace), минуя стек ядра ОС.</div>
              <div className="tc-adv"><svg viewBox="0 0 14 14"><polyline points="1,7 4,10 13,3" /></svg>Обход ядра ОС, минимальные задержки</div>
            </div>
            <div className="tech-card">
              <div className="tc-name">VPP</div>
              <div className="tc-full">Vector Packet Processing</div>
              <div className="tc-desc">Высокопроизводительный стек обработки сетевых пакетов с векторной моделью выполнения — основа производительности Вектора.</div>
              <div className="tc-adv"><svg viewBox="0 0 14 14"><polyline points="1,7 4,10 13,3" /></svg>Масштабируемость до 100+ Гбит/с</div>
            </div>
            <div className="tech-card">
              <div className="tc-name">Astra Linux</div>
              <div className="tc-full">Защищённая ОС российской разработки</div>
              <div className="tc-desc">Нативная интеграция с Astra Linux на уровне ядра — использование механизмов мандатного управления доступом и модулей безопасности SELinux.</div>
              <div className="tc-adv"><svg viewBox="0 0 14 14"><polyline points="1,7 4,10 13,3" /></svg>Сертификаты ФСТЭК, интеграция на уровне ядра</div>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE MODAL */}
      <div
        className={"modal-ov" + (open ? " open" : "")}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveModule(null);
        }}
      >
        <div className="modal">
          <div className="modal-head">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flex: 1 }}>
              <div className={"modal-ico " + (d ? d.cls : "b")}>
                <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: d ? d.ico : "" }} />
              </div>
              <div>
                <div className="modal-title">{d ? d.name : "Модуль"}</div>
                <div className={"modal-tag " + (d ? d.cls : "b")}>{d ? d.tag : "Базовый"}</div>
              </div>
            </div>
            <button className="modal-x" onClick={() => setActiveModule(null)}><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
          </div>
          <p className="modal-desc">{d ? d.desc : ""}</p>
          <div className="modal-feats">
            {d &&
              d.feats.map((f, i) => (
                <div className="modal-feat" key={i}>
                  <div className="mf-dot" style={{ background: d.cls === "t" ? "var(--teal)" : "var(--blue)" }}></div>
                  <span>{f}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
