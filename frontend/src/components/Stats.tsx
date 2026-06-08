export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-row">
        <div className="stat fu">
          <div className="stat-num"><span className="cnt" data-to="100" data-suffix="">0</span><b> Гбит/с</b></div>
          <div className="stat-lbl">пропускная способность на DPDK/VPP</div>
        </div>
        <div className="stat fu d1">
          <div className="stat-num"><span className="cnt" data-to="8" data-suffix="">0</span><b> модулей</b></div>
          <div className="stat-lbl">в единой платформе безопасности</div>
        </div>
        <div className="stat fu d2">
          <div className="stat-num"><b>до </b><span className="cnt" data-to="10000" data-suffix="">0</span></div>
          <div className="stat-lbl">одновременных VPN-туннелей</div>
        </div>
        <div className="stat fu d3">
          <div className="stat-num"><b>ФСТЭК</b> / ФСБ</div>
          <div className="stat-lbl">сертификация и реестр Минцифры</div>
        </div>
      </div>
    </div>
  );
}
