import { useEffect, useState } from "react";
import { MODS } from "../data/modules";

export default function Modules() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  // на адаптиве клик по карточке не открывает модалку (не затемняет фон)
  const openMod = (i: number) => {
    if (window.innerWidth > 768) setActiveModule(i);
  };

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
        <h2 className="sec-h fu d1">Модульная архитектура<br />для комплексной защиты</h2>
        <p className="sec-sub fu d2">Подключайте только необходимые модули. Расширяйте платформу по мере роста инфраструктуры без замены решения.</p>
        <div className="mod-grid">
          {/* 1: NGFW */}
          <div className="mod-card fu" data-mod="0" onClick={() => openMod(0)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="m0lg1" x1="52" y1="113" x2="148" y2="88" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".55" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".08" />
                </linearGradient>
                <linearGradient id="m0lg2" x1="52" y1="99" x2="148" y2="74" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".65" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".12" />
                </linearGradient>
                <linearGradient id="m0lg3" x1="52" y1="85" x2="148" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".75" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".18" />
                </linearGradient>
                <linearGradient id="m0lg4" x1="52" y1="71" x2="148" y2="46" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".9" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".25" />
                </linearGradient>
                <clipPath id="m0ngfwShieldClip">
                  <path d="M100,36 L115,45 L115,63 Q115,77 100,83 Q85,77 85,63 L85,45 Z" />
                </clipPath>
                <filter id="m0ngfwShieldBlur"><feGaussianBlur stdDeviation="2" /></filter>
              </defs>
              <polygon id="m0nl4" points="100,138 148,113 100,88 52,113" fill="rgba(3,33,73,.03)" stroke="url(#m0lg1)" strokeWidth="1" opacity=".5" />
              <polygon id="m0nl3" points="100,124 148,99 100,74 52,99" fill="rgba(3,33,73,.05)" stroke="url(#m0lg2)" strokeWidth="1" opacity=".65" />
              <polygon id="m0nl2" points="100,110 148,85 100,60 52,85" fill="rgba(3,33,73,.07)" stroke="url(#m0lg3)" strokeWidth="1.2" opacity=".75" />
              <polygon id="m0nl1" points="100,96 148,71 100,46 52,71" fill="rgba(3,33,73,.10)" stroke="url(#m0lg4)" strokeWidth="1.5" opacity=".85" />
              <g id="m0ngfw-shield">
                <path d="M100,36 L115,45 L115,63 Q115,77 100,83 Q85,77 85,63 L85,45 Z" fill="rgba(3,33,73,.22)" stroke="#032149" strokeWidth="2" />
                <g transform="translate(93,54) scale(0.48)">
                  <path d="M7.49597 0H1.49164C0.797714 0 0.33956 0.721835 0.634941 1.34975L13.6419 28.9999L12.6121 17.6471L8.4149 0.718911C8.31019 0.296581 7.93109 0 7.49597 0Z" fill="#032149" />
                  <path d="M20.6344 0H26.6387C27.3327 0 27.7908 0.721835 27.4954 1.34975L14.4884 28.9999L15.5183 17.6471L19.7155 0.718911C19.8202 0.296581 20.1993 0 20.6344 0Z" fill="#032149" />
                </g>
              </g>
            </svg></div>
            <div className="mod-name">Межсетевой экран NGFW</div>
            <div className="mod-desc">Stateful/stateless фильтрация с анализом приложений L7</div>
            <span className="mod-tag b">Базовый</span>
          </div>

          {/* 2: IDS/IPS */}
          <div className="mod-card fu d1" data-mod="1" onClick={() => openMod(1)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="m1gsi" x1="100" y1="74" x2="148" y2="36" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#032149" stopOpacity=".9" /><stop offset="100%" stopColor="#032149" stopOpacity=".15" /></linearGradient>
                <filter id="m1blur2" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="12" /></filter>
                <radialGradient id="m1rg2" cx="50%" cy="50%" r="48%"><stop offset="0%" stopColor="#032149" stopOpacity=".07" /><stop offset="100%" stopColor="#032149" stopOpacity="0" /></radialGradient>
              </defs>
              <circle cx="100" cy="74" r="80" fill="url(#m1rg2)" />
              <circle cx="100" cy="74" r="55" stroke="rgba(3,33,73,.11)" strokeWidth="1" fill="none" />
              <circle cx="100" cy="74" r="38" stroke="rgba(3,33,73,.4)" strokeWidth="1" fill="none" />
              <circle cx="100" cy="74" r="22" stroke="rgba(3,33,73,.4)" strokeWidth="1.2" fill="none" />
              <circle cx="100" cy="74" r="8" stroke="rgba(3,33,73,.7)" strokeWidth="1.5" fill="rgba(3,33,73,.11)" />
              <line x1="100" y1="16" x2="100" y2="132" stroke="rgba(3,33,73,.11)" strokeWidth="1" strokeDasharray="3 5" />
              <line x1="42" y1="74" x2="158" y2="74" stroke="rgba(3,33,73,.11)" strokeWidth="1" strokeDasharray="3 5" />
              <g id="m1ids-sweep">
                <path d="M100,74 L148,36 A63,63,0,0,1,155,110 Z" fill="rgba(3,33,73,.17)" />
                <line x1="100" y1="74" x2="148" y2="36" stroke="url(#m1gsi)" strokeWidth="1.5" />
                <animateTransform attributeName="transform" type="rotate" from="0 100 74" to="360 100 74" dur="5s" repeatCount="indefinite" />
              </g>
              <circle cx="136" cy="44" r="5" fill="#FB7185" stroke="rgba(251,113,133,.35)" strokeWidth="5" />
              <circle cx="58" cy="54" r="4" fill="rgba(251,191,36,.75)" stroke="rgba(251,191,36,.3)" strokeWidth="4" />
              <circle cx="100" cy="74" r="4" fill="#032149" />
            </svg></div>
            <div className="mod-name">IDS/IPS</div>
            <div className="mod-desc">Обнаружение и предотвращение вторжений — 50 000+ сигнатур</div>
            <span className="mod-tag b">Базовый</span>
          </div>

          {/* 3: DPI */}
          <div className="mod-card fu d2" data-mod="2" onClick={() => openMod(2)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="m2lg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#032149" /><stop offset="100%" stopColor="#032149" stopOpacity=".4" /></linearGradient></defs>
              <polygon points="100,114 150,87 100,60 50,87" fill="rgba(3,33,73,.11)" stroke="rgba(3,33,73,.5)" strokeWidth="1.5" />
              <polygon points="150,87 150,117 100,144 100,114" fill="rgba(3,33,73,.17)" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <polygon points="50,87 50,117 100,144 100,114" fill="rgba(3,33,73,.13)" stroke="rgba(3,33,73,.18)" strokeWidth="1" />
              <line x1="72" y1="85" x2="128" y2="63" stroke="rgba(3,33,73,.6)" strokeWidth="1.5" />
              <line x1="70" y1="93" x2="126" y2="71" stroke="rgba(3,33,73,.55)" strokeWidth="1" />
              <line x1="68" y1="101" x2="116" y2="82" stroke="rgba(3,33,73,.35)" strokeWidth="1" />
              <circle cx="145" cy="44" r="22" stroke="url(#m2lg3)" strokeWidth="1.5" fill="rgba(3,33,73,.17)" />
              <circle cx="145" cy="44" r="14" stroke="rgba(3,33,73,.4)" strokeWidth="1" fill="none" />
              <line x1="132" y1="43" x2="158" y2="43" stroke="#032149" strokeWidth="1.5" />
              <line x1="135" y1="50" x2="155" y2="50" stroke="rgba(3,33,73,.5)" strokeWidth="1" />
              <line x1="161" y1="62" x2="172" y2="73" stroke="url(#m2lg3)" strokeWidth="2.5" strokeLinecap="round" />
            </svg></div>
            <div className="mod-name">Глубокая инспекция DPI</div>
            <div className="mod-desc">L7-анализ и SSL/TLS-дешифровка до 100 Гбит/с</div>
            <span className="mod-tag b">Базовый</span>
          </div>

          {/* 4: VPN */}
          <div className="mod-card fu d3" data-mod="3" onClick={() => openMod(3)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="m3vg1" x1="46" y1="110" x2="154" y2="38" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".45" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".06" />
                </linearGradient>
                <linearGradient id="m3vg2" x1="58" y1="99" x2="142" y2="49" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".58" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".10" />
                </linearGradient>
                <linearGradient id="m3vg3" x1="70" y1="90" x2="130" y2="58" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#032149" stopOpacity=".72" />
                  <stop offset="100%" stopColor="#032149" stopOpacity=".16" />
                </linearGradient>
              </defs>
              <polygon id="m3vh4" points="100,8 154,38 154,110 100,140 46,110 46,38" fill="rgba(3,33,73,.03)" stroke="url(#m3vg1)" strokeWidth="1" />
              <polygon id="m3vh3" points="100,24 142,49 142,99 100,124 58,99 58,49" fill="rgba(3,33,73,.05)" stroke="url(#m3vg2)" strokeWidth="1.2" />
              <polygon id="m3vh2" points="100,39 130,58 130,90 100,109 70,90 70,58" fill="rgba(3,33,73,.08)" stroke="url(#m3vg3)" strokeWidth="1.5" />
              <polygon id="m3vh1" points="100,53 118,63 118,83 100,93 82,83 82,63" fill="rgba(3,33,73,.14)" stroke="#032149" strokeWidth="1.8" />
              <rect x="92" y="66" width="16" height="13" rx="2" fill="rgba(3,33,73,.25)" stroke="#032149" strokeWidth="1.6" />
              <path d="M96,66 Q96,59 100,59 Q104,59 104,66" fill="none" stroke="#032149" strokeWidth="1.6" />
              <circle cx="100" cy="72" r="2.5" fill="#032149" />
            </svg></div>
            <div className="mod-name">VPN-шлюз</div>
            <div className="mod-desc">IPSec/SSL VPN с поддержкой ГОСТ-шифрования</div>
            <span className="mod-tag b">Базовый</span>
          </div>

          {/* 5: WAF */}
          <div className="mod-card adv fu d1" data-mod="4" onClick={() => openMod(4)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="m4shieldClip">
                  <path d="M100,100 L120,88 L120,66 Q120,50 100,44 Q80,50 80,66 L80,88 Z" />
                </clipPath>
                <filter id="m4shieldBlur"><feGaussianBlur stdDeviation="2.5" /></filter>
              </defs>
              <g id="m4waf-globe">
                <circle cx="100" cy="64" r="52" stroke="rgba(3,33,73,.28)" strokeWidth="1" fill="rgba(3,33,73,.03)" />
                <ellipse cx="100" cy="49" rx="44" ry="11" stroke="rgba(3,33,73,.2)" strokeWidth="1" fill="none" />
                <ellipse cx="100" cy="64" rx="52" ry="13" stroke="rgba(3,33,73,.2)" strokeWidth="1" fill="none" />
                <ellipse cx="100" cy="79" rx="44" ry="11" stroke="rgba(3,33,73,.2)" strokeWidth="1" fill="none" />
                <line x1="100" y1="12" x2="100" y2="116" stroke="rgba(3,33,73,.14)" strokeWidth="1" />
                <ellipse cx="100" cy="64" rx="26" ry="52" stroke="rgba(3,33,73,.14)" strokeWidth="1" fill="none" />
              </g>
              <g clipPath="url(#m4shieldClip)" filter="url(#m4shieldBlur)">
                <rect x="75" y="38" width="50" height="68" fill="rgba(3,33,73,.07)" />
                <circle cx="100" cy="64" r="52" stroke="rgba(3,33,73,.55)" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="49" rx="44" ry="11" stroke="rgba(3,33,73,.45)" strokeWidth="1.5" fill="none" />
                <ellipse cx="100" cy="64" rx="52" ry="13" stroke="rgba(3,33,73,.45)" strokeWidth="1.5" fill="none" />
                <ellipse cx="100" cy="79" rx="44" ry="11" stroke="rgba(3,33,73,.45)" strokeWidth="1.5" fill="none" />
                <line x1="100" y1="12" x2="100" y2="116" stroke="rgba(3,33,73,.35)" strokeWidth="1.5" />
              </g>
              <path d="M100,100 L120,88 L120,66 Q120,50 100,44 Q80,50 80,66 L80,88 Z" fill="rgba(3,33,73,.06)" stroke="#032149" strokeWidth="1.8" />
              <g transform="translate(91,63) scale(0.62)">
                <path d="M7.49597 0H1.49164C0.797714 0 0.33956 0.721835 0.634941 1.34975L13.6419 28.9999L12.6121 17.6471L8.4149 0.718911C8.31019 0.296581 7.93109 0 7.49597 0Z" fill="#032149" />
                <path d="M20.6344 0H26.6387C27.3327 0 27.7908 0.721835 27.4954 1.34975L14.4884 28.9999L15.5183 17.6471L19.7155 0.718911C19.8202 0.296581 20.1993 0 20.6344 0Z" fill="#032149" />
              </g>
            </svg></div>
            <div className="mod-name">Web Application Firewall</div>
            <div className="mod-desc">Защита веб-приложений от OWASP Top 10, API-защита</div>
            <span className="mod-tag t">Расширенный</span>
          </div>

          {/* 6: UTM */}
          <div className="mod-card adv fu d2" data-mod="5" onClick={() => openMod(5)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="118" y="10" width="62" height="82" rx="5" fill="rgba(3,33,73,.04)" stroke="rgba(3,33,73,.18)" strokeWidth="1" />
              <rect x="118" y="10" width="62" height="18" rx="5" fill="rgba(3,33,73,.07)" />
              <rect x="118" y="23" width="62" height="5" fill="rgba(3,33,73,.07)" />
              <polyline points="127,52 137,42 147,48 157,36 167,41" stroke="rgba(3,33,73,.25)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="127" y="66" width="44" height="5" rx="2" fill="rgba(3,33,73,.07)" />
              <rect x="127" y="76" width="34" height="5" rx="2" fill="rgba(3,33,73,.05)" />
              <rect x="20" y="26" width="56" height="78" rx="5" fill="rgba(3,33,73,.04)" stroke="rgba(3,33,73,.18)" strokeWidth="1" />
              <circle cx="34" cy="48" r="4" fill="rgba(74,222,128,.35)" />
              <circle cx="34" cy="62" r="4" fill="rgba(251,113,133,.35)" />
              <circle cx="34" cy="76" r="4" fill="rgba(251,191,36,.35)" />
              <rect x="44" y="45" width="24" height="6" rx="2" fill="rgba(3,33,73,.07)" />
              <rect x="44" y="59" width="18" height="6" rx="2" fill="rgba(3,33,73,.07)" />
              <rect x="44" y="73" width="22" height="6" rx="2" fill="rgba(3,33,73,.07)" />
              <rect x="44" y="64" width="92" height="80" rx="5" fill="rgba(3,33,73,.13)" stroke="#032149" strokeWidth="1.8" />
              <rect x="44" y="64" width="92" height="20" rx="5" fill="rgba(3,33,73,.28)" />
              <rect x="44" y="78" width="92" height="6" fill="rgba(3,33,73,.28)" />
              <circle cx="59" cy="74" r="3" fill="rgba(3,33,73,.7)" />
              <circle cx="71" cy="74" r="3" fill="rgba(3,33,73,.7)" />
              <rect x="55" y="94" width="72" height="6" rx="2" fill="rgba(3,33,73,.45)" />
              <rect x="55" y="106" width="56" height="5" rx="2" fill="rgba(3,33,73,.28)" />
              <rect x="55" y="118" width="64" height="5" rx="2" fill="rgba(3,33,73,.28)" />
              <rect x="55" y="130" width="36" height="10" rx="3" fill="rgba(3,33,73,.55)" stroke="#032149" strokeWidth="1" />
            </svg></div>
            <div className="mod-name">UTM-управление</div>
            <div className="mod-desc">Единая консоль, REST API, ролевая модель доступа</div>
            <span className="mod-tag t">Расширенный</span>
          </div>

          {/* 7: Anti-DDoS */}
          <div className="mod-card adv fu d3" data-mod="6" onClick={() => openMod(6)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="m6arr-ddos" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 7 3, 0 6" fill="rgba(251,113,133,.75)" />
                </marker>
                <radialGradient id="m6rg7" cx="50%" cy="50%" r="42%"><stop offset="0%" stopColor="#032149" stopOpacity=".06" /><stop offset="100%" stopColor="#032149" stopOpacity="0" /></radialGradient>
              </defs>
              <circle cx="100" cy="72" r="72" fill="url(#m6rg7)" />
              <line id="m6da-top" x1="100" y1="6" x2="100" y2="30" stroke="rgba(251,113,133,.75)" strokeWidth="1.5" markerEnd="url(#m6arr-ddos)" />
              <line id="m6da-tr" x1="150" y1="14" x2="130" y2="44" stroke="rgba(251,113,133,.65)" strokeWidth="1.5" markerEnd="url(#m6arr-ddos)" />
              <line id="m6da-right" x1="168" y1="68" x2="132" y2="68" stroke="rgba(251,113,133,.75)" strokeWidth="1.5" markerEnd="url(#m6arr-ddos)" />
              <line id="m6da-left" x1="32" y1="68" x2="68" y2="68" stroke="rgba(251,113,133,.75)" strokeWidth="1.5" markerEnd="url(#m6arr-ddos)" />
              <line id="m6da-tl" x1="50" y1="14" x2="70" y2="44" stroke="rgba(251,113,133,.65)" strokeWidth="1.5" markerEnd="url(#m6arr-ddos)" />
              <path d="M100,36 L128,52 L128,86 Q128,106 100,114 Q72,106 72,86 L72,52 Z" fill="rgba(3,33,73,.14)" stroke="#032149" strokeWidth="1.8" />
              <g transform="translate(89,65) scale(0.76)">
                <path d="M7.49597 0H1.49164C0.797714 0 0.33956 0.721835 0.634941 1.34975L13.6419 28.9999L12.6121 17.6471L8.4149 0.718911C8.31019 0.296581 7.93109 0 7.49597 0Z" fill="#032149" />
                <path d="M20.6344 0H26.6387C27.3327 0 27.7908 0.721835 27.4954 1.34975L14.4884 28.9999L15.5183 17.6471L19.7155 0.718911C19.8202 0.296581 20.1993 0 20.6344 0Z" fill="#032149" />
              </g>
              <circle cx="100" cy="36" r="3.5" fill="rgba(251,191,36,.9)" />
              <circle cx="128" cy="52" r="3" fill="rgba(251,191,36,.8)" />
              <circle cx="72" cy="52" r="3" fill="rgba(251,191,36,.8)" />
            </svg></div>
            <div className="mod-name">Anti-DDoS</div>
            <div className="mod-desc">Защита от DDoS-атак объёмом до 100 Гбит/с</div>
            <span className="mod-tag t">Расширенный</span>
          </div>

          {/* 8: Threat Intelligence */}
          <div className="mod-card adv fu d4" data-mod="7" onClick={() => openMod(7)}>
            <div className="mod-art"><svg viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="100" y1="72" x2="52" y2="30" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="100" y1="72" x2="148" y2="30" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="100" y1="72" x2="164" y2="82" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="100" y1="72" x2="148" y2="120" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="100" y1="72" x2="52" y2="120" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="100" y1="72" x2="36" y2="82" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="100" y1="72" x2="100" y2="14" stroke="rgba(3,33,73,.48)" strokeWidth="1" />
              <line x1="52" y1="30" x2="148" y2="30" stroke="rgba(3,33,73,.11)" strokeWidth="1" />
              <line x1="36" y1="82" x2="52" y2="120" stroke="rgba(3,33,73,.11)" strokeWidth="1" />
              <line x1="164" y1="82" x2="148" y2="120" stroke="rgba(3,33,73,.11)" strokeWidth="1" />
              <circle cx="100" cy="14" r="6" fill="rgba(3,33,73,.22)" stroke="rgba(3,33,73,.65)" strokeWidth="1.5" />
              <circle cx="148" cy="30" r="5" fill="rgba(3,33,73,.15)" stroke="rgba(3,33,73,.5)" strokeWidth="1" />
              <circle cx="52" cy="30" r="5" fill="rgba(3,33,73,.15)" stroke="rgba(3,33,73,.5)" strokeWidth="1" />
              <circle cx="164" cy="82" r="6" fill="rgba(3,33,73,.13)" stroke="rgba(251,113,133,.7)" strokeWidth="1.5" />
              <circle cx="164" cy="82" r="13" stroke="rgba(251,113,133,.22)" strokeWidth="1" />
              <circle cx="36" cy="82" r="5" fill="rgba(3,33,73,.15)" stroke="rgba(3,33,73,.5)" strokeWidth="1" />
              <circle cx="148" cy="120" r="5" fill="rgba(3,33,73,.15)" stroke="rgba(3,33,73,.5)" strokeWidth="1" />
              <circle cx="52" cy="120" r="6" fill="rgba(3,33,73,.13)" stroke="rgba(251,113,133,.65)" strokeWidth="1.5" />
              <circle cx="52" cy="120" r="13" stroke="rgba(251,113,133,.2)" strokeWidth="1" />
              <circle cx="100" cy="72" r="18" fill="rgba(3,33,73,.15)" stroke="#032149" strokeWidth="2" />
              <circle cx="100" cy="72" r="10" fill="rgba(3,33,73,.25)" stroke="rgba(3,33,73,.8)" strokeWidth="1.5" />
              <circle cx="100" cy="72" r="4" fill="#032149" />
              <circle cx="76" cy="51" r="2.5" fill="#032149" opacity=".7" />
              <circle cx="131" cy="96" r="2" fill="#032149" opacity=".55" />
            </svg></div>
            <div className="mod-name">Threat Intelligence</div>
            <div className="mod-desc">Фиды угроз и обновление сигнатур в реальном времени</div>
            <span className="mod-tag t">Расширенный</span>
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
