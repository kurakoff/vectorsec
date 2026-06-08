function Arrow() {
  return (
    <svg viewBox="0 0 14 14"><line x1="2" y1="7" x2="12" y2="7" /><polyline points="8,3 12,7 8,11" /></svg>
  );
}

export default function Industries() {
  return (
    <section className="ind-s" id="industries">
      <div className="inner">
        <h2 className="sec-h fu d1">Решения для ключевых отраслей</h2>
        <p className="sec-sub fu d2">Платформа Вектор адаптирована под требования каждого сектора - от крупного бизнеса до государственных структур и промышленных предприятий.</p>
        <div className="ind-grid">
          <div className="ind-card fu">
            <div className="ind-ico"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
            <div className="ind-name">Крупный корпоративный сектор</div>
            <div className="ind-msg">Надёжность без замедления бизнес-процессов. Высокая производительность обеспечивает защиту без влияния на продуктивность - никаких компромиссов между безопасностью и скоростью.</div>
            <a href="#contact" className="ind-lnk">Узнать подробнее <Arrow /></a>
          </div>
          <div className="ind-card fu d1">
            <div className="ind-ico"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg></div>
            <div className="ind-name">Госсектор и объекты КИИ</div>
            <div className="ind-msg">Полное соответствие 187-ФЗ, требованиям ФСТЭК и ФСБ. Включение в реестр Минцифры. Готовность к проверкам регуляторов и эксплуатации на объектах критической инфраструктуры.</div>
            <a href="#contact" className="ind-lnk">Узнать подробнее <Arrow /></a>
          </div>
          <div className="ind-card fu d2">
            <div className="ind-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 4v2M12 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
            <div className="ind-name">Промышленность и АСУ ТП</div>
            <div className="ind-msg">Специализированные модули для промышленных протоколов Modbus и OPC UA. Изоляция критических сегментов без влияния на непрерывность технологических процессов.</div>
            <a href="#contact" className="ind-lnk">Узнать подробнее <Arrow /></a>
          </div>
          <div className="ind-card fu d3">
            <div className="ind-ico"><svg viewBox="0 0 24 24"><path d="M2 16.1A5 5 0 0 1 5.5 8M17.5 8a5 5 0 0 1 4.5 8.1M6 16.1A3 3 0 0 1 8.5 11M15.5 11a3 3 0 0 1 2.5 5.1" /><line x1="12" y1="10" x2="12" y2="22" /><line x1="2" y1="22" x2="22" y2="22" /></svg></div>
            <div className="ind-name">Операторы связи</div>
            <div className="ind-msg">Carrier-grade надёжность и поддержка десятков тысяч абонентов. Мультитенантность и управляемые сервисы безопасности (MSSP). Линейная масштабируемость для операторских инфраструктур.</div>
            <a href="#contact" className="ind-lnk">Узнать подробнее <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
