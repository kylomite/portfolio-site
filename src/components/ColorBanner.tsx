import { useEffect } from "react";
import "../index.scss";

function ColorBanner({ isDarkMode }: { isDarkMode: boolean }) {
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty('--color-bg1', '--color-primary-dark');
      root.style.setProperty('--color-bg2', '--color-secondary-dark');
    } else {
      root.style.setProperty('--color-bg1', '--color-primary-light');
      root.style.setProperty('--color-bg2', '--color-secondary-light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    return () => {
      window.removeEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDarkMode = document.body.classList.contains('dark');

    if (isDarkMode) {
      root.style.setProperty('--color-bg1', '--color-primary-dark');
    } else {
      root.style.setProperty('--color-bg1', '--color-primary-dark');
    }
  }, []);

  return (
    <div className="gradient-bg absolute top-0 left-0 w-full min-h-screen z-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-full">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradient-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
        <div className="interactive" />
      </div>
    </div>
  )
}

export default ColorBanner;