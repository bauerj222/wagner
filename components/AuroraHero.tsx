"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Light beams rising from the bottom — evokes electricity
function LightBeams() {
  const beams = useMemo(() =>
    Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      width: `${1 + Math.random() * 2}px`,
      height: `${60 + Math.random() * 140}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${4 + Math.random() * 6}s`,
      opacity: 0.15 + Math.random() * 0.25,
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: b.left,
            width: b.width,
            height: b.height,
            background: `linear-gradient(to top, rgba(239,68,68,${b.opacity}), transparent)`,
            animation: `beam-rise ${b.duration} ${b.delay} ease-in-out infinite`,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}

// Multi-layer animated gradient background
function GradientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Layer 1 — slow vertical drift */}
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(circle at 30% 50%, rgba(239,68,68,0.12), transparent 50%)",
        animation: "grad-drift-v 20s ease-in-out infinite alternate",
        mixBlendMode: "hard-light",
      }} />
      {/* Layer 2 — slow circular */}
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(circle at 70% 30%, rgba(239,68,68,0.08), transparent 50%)",
        animation: "grad-drift-c 25s ease-in-out infinite alternate",
        mixBlendMode: "hard-light",
      }} />
      {/* Layer 3 — horizontal */}
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(circle at 50% 80%, rgba(200,40,40,0.1), transparent 50%)",
        animation: "grad-drift-h 18s ease-in-out infinite alternate",
        mixBlendMode: "hard-light",
      }} />
      {/* Layer 4 — mouse-tracking */}
      <div className="absolute inset-0 opacity-40" style={{
        background: "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.06), transparent 60%)",
        transition: "background 0.3s ease",
      }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" />
      {/* Bottom floor glow */}
      <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-red-500/[0.04] via-transparent to-transparent" />
    </div>
  );
}

export default function AuroraHero({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />
      <LightBeams />
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        {children}
      </motion.div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}
