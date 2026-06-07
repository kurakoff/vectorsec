import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <a href="#" className="foot-logo" aria-label="ВЕКТОР">
          <Logo variant="full" gradientId="vec-grad-foot" />
        </a>
        <span className="foot-copy">© 2024 Платформа Вектор. Все права защищены.</span>
        <div className="foot-badges">
          <span className="fbadge">ФСТЭК</span>
          <span className="fbadge">ФСБ</span>
          <span className="fbadge">РЕЕСТР МЦ</span>
        </div>
      </div>
    </footer>
  );
}
