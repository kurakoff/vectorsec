import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Platform from "./components/Platform";
import Modules from "./components/Modules";
import Advantages from "./components/Advantages";
import Compare from "./components/Compare";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function counter(el: HTMLElement, to: number, dur: number) {
  const start = performance.now();
  const step = (t: number) => {
    const p = Math.min((t - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * to).toLocaleString("ru-RU");
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = to.toLocaleString("ru-RU");
  };
  requestAnimationFrame(step);
}

function App() {
  // ── FADE-UP REVEAL ──
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fu").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── COUNTERS ──
  useEffect(() => {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting && !el.dataset.done) {
            el.dataset.done = "1";
            counter(el, Number(el.dataset.to), 1800);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".cnt").forEach((el) => cio.observe(el));
    return () => cio.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Platform />
      <Modules />
      <Advantages />
      <Compare />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
