import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"" + (scrolled ? " on" : "")}>
      <a href="#" className="nav-logo" aria-label="ВЕКТОР">
        <Logo variant="full" mono />
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
