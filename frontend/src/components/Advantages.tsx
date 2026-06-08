export default function Advantages() {
  return (
    <section className="adv-s" id="advantages">
      <div className="inner">
        <h2 className="sec-h fu d1">Почему выбирают Вектор</h2>
        <p className="sec-sub fu d2">Четыре ключевых отличия платформы, которые важны руководителям ИБ, CTO и системным интеграторам.</p>
        <div className="adv-grid">
          <div className="adv-card fu">
            <div className="adv-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg></div>
            <div className="adv-title">Модульность и гибкое лицензирование</div>
            <div className="adv-tag">Платите только за нужные функции</div>
            <div className="adv-desc">Низкий порог входа: начните с базовых модулей и расширяйте защиту по мере необходимости. Subscription-модель снижает CAPEX и позволяет постепенное масштабирование без замены платформы.</div>
            <div className="adv-detail">Базовый пакет · Расширенные модули · Enterprise-лицензирование · Оценочные лицензии</div>
          </div>
          <div className="adv-card fu d1">
            <div className="adv-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
            <div className="adv-title">Высокая производительность</div>
            <div className="adv-tag">До 100 Гбит/с без деградации под нагрузкой</div>
            <div className="adv-desc">Userspace-обработка на DPDK/VPP исключает bottleneck на уровне ядра ОС. Линейное масштабирование производительности при добавлении процессорных ядер - без компромиссов в защите.</div>
            <div className="adv-detail">DPDK userspace · VPP vectorized · Многоядерное масштабирование · NUMA-оптимизация</div>
          </div>
          <div className="adv-card fu d2">
            <div className="adv-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg></div>
            <div className="adv-title">Соответствие регуляторам</div>
            <div className="adv-tag">ФСТЭК · ФСБ · 187-ФЗ · Реестр Минцифры</div>
            <div className="adv-desc">Платформа включена в реестр отечественного ПО Минцифры России. Полное соответствие требованиям 187-ФЗ для объектов КИИ. Сертификация по требованиям ФСТЭК и ФСБ России.</div>
            <div className="adv-detail">Реестр ПО № ХXXX · Сертификат ФСТЭК · ФСБ России · 187-ФЗ КИИ</div>
          </div>
          <div className="adv-card fu d3">
            <div className="adv-icon"><svg viewBox="0 0 24 24"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg></div>
            <div className="adv-title">Мощный интеграционный потенциал</div>
            <div className="adv-tag">Встраивается в существующую инфраструктуру</div>
            <div className="adv-desc">REST API для полной автоматизации. Поддержка интеграции с SIEM/SOAR-системами. Web-консоль с ролевой моделью RBAC. CLI для скриптинга и DevSecOps-процессов.</div>
            <div className="adv-detail">REST API · SIEM/SOAR · CLI/Scripting · Web-консоль · RBAC · Webhooks</div>
          </div>
        </div>
      </div>
    </section>
  );
}
