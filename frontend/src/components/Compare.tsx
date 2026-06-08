function Yes() {
  return (
    <span className="cmp-yes"><svg viewBox="0 0 14 14"><polyline points="2,7 5,10 12,3" /></svg></span>
  );
}
function No() {
  return <span className="cmp-no"></span>;
}
function Part() {
  return <span className="cmp-part">частично</span>;
}

export default function Compare() {
  return (
    <section className="cmp-s" id="compare">
      <div className="inner">
        <h2 className="sec-h fu d1">Вектор vs конкуренты</h2>
        <p className="sec-sub fu d2">Сравнение по ключевым критериям выбора NGFW-решения для российского рынка. Вектор закрывает как российские регуляторные требования, так и задачи высокой производительности.</p>
        <div className="cmp-wrap fu d2">
          <table className="cmp-table">
            <thead>
              <tr>
                <th style={{ borderRight: "1px solid var(--border)" }}>Критерий</th>
                <th className="cmp-th-v">ВЕКТОР</th>
                <th>Зарубежные NGFW<br /><span style={{ fontSize: "11px", fontWeight: 400, opacity: 0.65 }}>Palo Alto / Fortinet</span></th>
                <th>InfoTeCS<br /><span style={{ fontSize: "11px", fontWeight: 400, opacity: 0.65 }}>ViPNet</span></th>
                <th>Код<br /><span style={{ fontSize: "11px", fontWeight: 400, opacity: 0.65 }}>Безопасности</span></th>
                <th>S-Terra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Производительность ≥ 100 Гбит/с</td>
                <td className="cmp-vc"><Yes /></td>
                <td><Yes /></td>
                <td><No /></td>
                <td><No /></td>
                <td><No /></td>
              </tr>
              <tr>
                <td>Модульное лицензирование</td>
                <td className="cmp-vc"><Yes /></td>
                <td><Part /></td>
                <td><No /></td>
                <td><Part /></td>
                <td><No /></td>
              </tr>
              <tr>
                <td>Сертификация ФСТЭК / ФСБ</td>
                <td className="cmp-vc"><Yes /></td>
                <td><No /></td>
                <td><Yes /></td>
                <td><Yes /></td>
                <td><Yes /></td>
              </tr>
              <tr>
                <td>Соответствие 187-ФЗ (объекты КИИ)</td>
                <td className="cmp-vc"><Yes /></td>
                <td><No /></td>
                <td><Yes /></td>
                <td><Yes /></td>
                <td><Part /></td>
              </tr>
              <tr>
                <td>Нативная интеграция Astra Linux</td>
                <td className="cmp-vc"><Yes /></td>
                <td><No /></td>
                <td><Part /></td>
                <td><Part /></td>
                <td><No /></td>
              </tr>
              <tr>
                <td>Реестр отечественного ПО Минцифры</td>
                <td className="cmp-vc"><Yes /></td>
                <td><No /></td>
                <td><Yes /></td>
                <td><Yes /></td>
                <td><Yes /></td>
              </tr>
              <tr>
                <td>DPDK / VPP userspace-обработка</td>
                <td className="cmp-vc"><Yes /></td>
                <td><Yes /></td>
                <td><No /></td>
                <td><No /></td>
                <td><No /></td>
              </tr>
              <tr>
                <td>REST API / автоматизация</td>
                <td className="cmp-vc"><Yes /></td>
                <td><Yes /></td>
                <td><Part /></td>
                <td><Part /></td>
                <td><No /></td>
              </tr>
              <tr>
                <td>Subscription-модель лицензирования</td>
                <td className="cmp-vc"><Yes /></td>
                <td><Yes /></td>
                <td><No /></td>
                <td><No /></td>
                <td><No /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="fu" style={{ marginTop: "16px", fontSize: "12px", color: "var(--light)", textAlign: "right" }}>* На основе открытых данных. Характеристики конкурентов могут варьироваться в зависимости от версии и конфигурации.</p>
      </div>
    </section>
  );
}
