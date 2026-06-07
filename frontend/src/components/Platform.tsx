export default function Platform() {
  return (
    <section className="platform-s" id="platform">
      <div className="inner plat-grid">
        <div>
          <p className="sec-tag fu">Платформа</p>
          <h2 className="sec-h fu d1">Единая модульная<br />платформа безопасности</h2>
          <p className="sec-sub fu d2" style={{ marginBottom: 0 }}>Вектор объединяет все необходимые функции защиты в единой высокопроизводительной платформе. Включайте только нужные модули — масштабируйте постепенно.</p>
          <div className="plat-feats">
            <div className="plat-feat fu d2">
              <div className="pf-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></div>
              <div className="pf-text"><h4>Модульная архитектура</h4><p>Включайте только нужные функции защиты, снижая совокупную стоимость владения</p></div>
            </div>
            <div className="plat-feat fu d3">
              <div className="pf-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
              <div className="pf-text"><h4>Обработка на базе DPDK/VPP</h4><p>Userspace-обработка пакетов без bottleneck на уровне ядра ОС</p></div>
            </div>
            <div className="plat-feat fu d4">
              <div className="pf-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <div className="pf-text"><h4>Нативная поддержка Astra Linux</h4><p>Глубокая интеграция на уровне ядра защищённой ОС</p></div>
            </div>
            <div className="plat-feat fu d5">
              <div className="pf-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
              <div className="pf-text"><h4>Единая консоль управления</h4><p>Web-консоль, CLI и REST API для полной автоматизации</p></div>
            </div>
          </div>
        </div>
        <div className="fu d2">
          {/* Architecture SVG */}
          <svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94A3B8" /></marker>
              <marker id="arrb" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#2563EB" /></marker>
              <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            {/* Threats box */}
            <rect x="12" y="110" width="88" height="100" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
            <circle cx="56" cy="148" r="16" fill="none" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="56" y1="132" x2="56" y2="164" stroke="#EF4444" strokeWidth="1" />
            <line x1="40" y1="148" x2="72" y2="148" stroke="#EF4444" strokeWidth="1" />
            <path d="M42 139 Q56 147 70 139" fill="none" stroke="#EF4444" strokeWidth="1" />
            <path d="M42 157 Q56 149 70 157" fill="none" stroke="#EF4444" strokeWidth="1" />
            <text x="56" y="178" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fontWeight="700" fill="#EF4444">Внешние</text>
            <text x="56" y="191" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fill="#EF4444" opacity=".7">угрозы</text>
            {/* Arrow in */}
            <line x1="102" y1="160" x2="130" y2="160" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr)" />
            {/* Platform box */}
            <rect x="132" y="48" width="196" height="224" rx="14" fill="#F5F8FF" stroke="#C7D5F0" strokeWidth="1.5" />
            {/* Platform header */}
            <rect x="132" y="48" width="196" height="40" rx="14" fill="#0B1F45" />
            <rect x="132" y="74" width="196" height="14" fill="#0B1F45" />
            <polygon points="145,60 152,51 159,60 155,62 151,67 148,62" fill="white" opacity=".85" />
            <text x="168" y="72" fontFamily="Manrope,sans-serif" fontSize="11" fontWeight="800" fill="white" letterSpacing=".08em">ВЕКТОР</text>
            {/* Layers */}
            <rect x="144" y="96" width="172" height="28" rx="6" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
            <text x="230" y="114" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fontWeight="700" fill="#1D4ED8">NGFW · IDS/IPS · DPI</text>
            <rect x="144" y="132" width="172" height="28" rx="6" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
            <text x="230" y="150" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fontWeight="700" fill="#1D4ED8">VPN · WAF · UTM</text>
            <rect x="144" y="168" width="172" height="28" rx="6" fill="#CCFBF1" stroke="#5EEAD4" strokeWidth="1" />
            <text x="230" y="186" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fontWeight="700" fill="#0D9488">Anti-DDoS · Threat Intel</text>
            <rect x="144" y="204" width="172" height="28" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <text x="230" y="222" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fontWeight="700" fill="#475569">DPDK / VPP · Astra Linux</text>
            <rect x="144" y="240" width="172" height="20" rx="5" fill="#0B1F45" />
            <text x="230" y="254" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="9" fontWeight="800" fill="white" letterSpacing=".05em">ЕДИНАЯ КОНСОЛЬ</text>
            {/* Animated dot through platform */}
            <circle r="3.5" fill="#2563EB" opacity=".8" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M-68,0 L128,0" />
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0;.8;.8;0" />
            </circle>
            {/* Arrow out */}
            <line x1="330" y1="160" x2="358" y2="160" stroke="#2563EB" strokeWidth="1.5" markerEnd="url(#arrb)" />
            {/* Protected box */}
            <rect x="360" y="110" width="88" height="100" rx="10" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1.5" />
            <circle cx="404" cy="142" r="10" fill="none" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="388" cy="158" r="7" fill="none" stroke="#16A34A" strokeWidth="1.2" />
            <circle cx="420" cy="158" r="7" fill="none" stroke="#16A34A" strokeWidth="1.2" />
            <line x1="396" y1="150" x2="391" y2="153" stroke="#16A34A" strokeWidth="1" />
            <line x1="412" y1="150" x2="417" y2="153" stroke="#16A34A" strokeWidth="1" />
            <text x="404" y="178" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fontWeight="700" fill="#16A34A">Защищённая</text>
            <text x="404" y="191" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="10" fill="#16A34A" opacity=".7">сеть</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
