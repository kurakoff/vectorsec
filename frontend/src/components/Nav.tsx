import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"" + (scrolled ? " on" : "")}>
      <a href="#" className="nav-logo">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 27L21 3L31 17L17 22L11 29Z" fill="currentColor" opacity=".95" />
          <path d="M5 27L17 22L11 27Z" fill="currentColor" opacity=".5" />
        </svg>
        <span className="nav-logo-text">ВЕКТОР</span>
      </a>
      <ul className="nav-links">
        <li><a href="#platform">Платформа</a></li>
        <li><a href="#modules">Модули</a></li>
        <li><a href="#advantages">Преимущества</a></li>
        <li><a href="#industries">Отрасли</a></li>
        <li><a href="#contact" className="nav-cta">Получить демо</a></li>
      </ul>
    </nav>
  );
}
