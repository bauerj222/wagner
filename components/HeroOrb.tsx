"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Electric sparks particle canvas
function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      brightness: number;
    }

    const particles: Particle[] = [];
    const cx = canvas.offsetWidth / 2;
    const cy = canvas.offsetHeight / 2;

    const spawn = () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 40;
      const speed = 0.3 + Math.random() * 0.8;
      particles.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
        vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.5 - 0.3,
        life: 0,
        maxLife: 60 + Math.random() * 80,
        size: 1 + Math.random() * 2,
        brightness: 0.5 + Math.random() * 0.5,
      });
    };

    // Lightning bolt segments
    interface Bolt {
      segments: { x1: number; y1: number; x2: number; y2: number }[];
      life: number;
      maxLife: number;
    }
    const bolts: Bolt[] = [];

    const spawnBolt = () => {
      const angle = Math.random() * Math.PI * 2;
      const startDist = 60;
      const endDist = 140 + Math.random() * 80;
      let x = cx + Math.cos(angle) * startDist;
      let y = cy + Math.sin(angle) * startDist;
      const tx = cx + Math.cos(angle) * endDist;
      const ty = cy + Math.sin(angle) * endDist;
      const segs: Bolt["segments"] = [];
      const steps = 4 + Math.floor(Math.random() * 4);

      for (let i = 0; i < steps; i++) {
        const t = (i + 1) / steps;
        const nx = x + (tx - x) * (1 / steps) + (Math.random() - 0.5) * 20;
        const ny = y + (ty - y) * (1 / steps) + (Math.random() - 0.5) * 20;
        segs.push({ x1: x, y1: y, x2: t < 1 ? nx : tx, y2: t < 1 ? ny : ty });
        x = nx;
        y = ny;
      }

      bolts.push({ segments: segs, life: 0, maxLife: 8 + Math.random() * 6 });
    };

    let frame = 0;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      frame++;

      // Spawn particles
      if (frame % 3 === 0) spawn();
      if (frame % 90 === 0) spawnBolt();

      // Draw/update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.brightness * (1 - p.life / p.maxLife);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 83, 82, ${alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${alpha * 0.15})`;
        ctx.fill();
      }

      // Draw/update bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        if (b.life > b.maxLife) {
          bolts.splice(i, 1);
          continue;
        }

        const alpha = 1 - b.life / b.maxLife;
        ctx.strokeStyle = `rgba(253, 83, 82, ${alpha * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "rgba(220, 38, 38, 0.6)";
        ctx.shadowBlur = 8;

        for (const seg of b.segments) {
          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
    />
  );
}

export default function HeroOrb() {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
      {/* Particle + bolt canvas */}
      <SparkCanvas />

      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-[15%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating ring 1 */}
      <motion.div
        className="absolute inset-[20%] rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
      </motion.div>

      {/* Rotating ring 2 (opposite) */}
      <motion.div
        className="absolute inset-[28%] rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
      </motion.div>

      {/* Core orb */}
      <motion.div
        className="absolute inset-[30%] rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 35%, rgba(253,83,82,0.25) 0%, rgba(220,38,38,0.15) 30%, rgba(185,28,28,0.08) 60%, transparent 80%)",
          boxShadow: "0 0 80px 20px rgba(220,38,38,0.15), inset 0 0 40px 10px rgba(220,38,38,0.1)",
        }}
        animate={{
          boxShadow: [
            "0 0 80px 20px rgba(220,38,38,0.15), inset 0 0 40px 10px rgba(220,38,38,0.1)",
            "0 0 100px 30px rgba(220,38,38,0.25), inset 0 0 50px 15px rgba(220,38,38,0.15)",
            "0 0 80px 20px rgba(220,38,38,0.15), inset 0 0 40px 10px rgba(220,38,38,0.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner highlight */}
      <motion.div
        className="absolute inset-[38%] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lightning bolt SVG icon in center */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]"
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
        </motion.svg>
      </div>
    </div>
  );
}
