import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <a href="#" className="foot-logo" aria-label="ВЕКТОР">
            <Logo variant="full" mono />
          </a>
          <p className="foot-tagline">
            Единая платформа сетевой безопасности класса NGFW
          </p>
        </div>
        <div className="foot-links">
          <a href="#platform">Платформа</a>
          <a href="#modules">Модули</a>
          <a href="#advantages">Преимущества</a>
          <a href="#industries">Отрасли</a>
          <a href="#contact">Контакты</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span className="foot-copy">© {year} Платформа «Вектор». Все права защищены.</span>
        <span className="foot-note">Российская разработка · Astra Linux · DPDK + VPP</span>
      </div>
    </footer>
  );
}
