"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const t0 = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - t0) / 1600, 1);
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

export function Marquee() {
  const items = ["Elektroinstallation", "EDV-Netzwerke", "Kundendienst", "Gewerbe", "Kabel & Sat", "Kernbohrung", "Meisterbetrieb", "Seit 1972"];
  return (
    <div className="overflow-hidden border-y border-white/[0.03] py-4">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 text-[11px] text-[#333] uppercase tracking-[0.2em] flex items-center gap-4">
            <span className="w-[3px] h-[3px] rounded-full bg-[#e85d04]/30" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
