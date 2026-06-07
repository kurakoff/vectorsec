export default function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <a href="#" className="foot-logo">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 27L21 3L31 17L17 22L11 29Z" fill="white" opacity=".95" />
            <path d="M5 27L17 22L11 27Z" fill="white" opacity=".5" />
          </svg>
          <span>ВЕКТОР</span>
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
