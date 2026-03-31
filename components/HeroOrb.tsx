"use client";

import { useEffect, useRef, useState } from "react";

// Mouse-tracking spotlight on grid
export function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 spotlight" />
    </div>
  );
}

// Scroll-triggered counter
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - t0) / 1800, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Marquee ticker
export function Marquee() {
  const items = ["Elektroinstallationen", "EDV-Netzwerke", "Kundendienst", "Gewerbe & Industrie", "Kabel & Sat", "Kernbohrungen", "Meisterbetrieb", "Seit 1972"];
  return (
    <div className="overflow-hidden border-y border-white/[0.04] py-4">
      <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-6 text-[12px] text-zinc-600 font-medium uppercase tracking-widest flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-red-500/30" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
