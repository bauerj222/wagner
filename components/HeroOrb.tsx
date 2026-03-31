"use client";

import { useEffect, useRef } from "react";

export default function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const dpr = window.devicePixelRatio || 1;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    interface P { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; }
    const particles: P[] = [];

    // Lightning bolts
    interface Bolt { pts: [number,number][]; life: number; max: number; width: number; }
    const bolts: Bolt[] = [];

    // Orbiting dots
    interface Dot { angle: number; speed: number; dist: number; size: number; }
    const dots: Dot[] = Array.from({ length: 30 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: (0.003 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1),
      dist: 100 + Math.random() * 120,
      size: 1 + Math.random() * 2.5,
    }));

    // Beams
    interface Beam { angle: number; length: number; speed: number; width: number; opacity: number; }
    const beams: Beam[] = Array.from({ length: 8 }, (_, i) => ({
      angle: (i / 8) * Math.PI * 2,
      length: 200 + Math.random() * 150,
      speed: 0.002 + Math.random() * 0.003,
      width: 1 + Math.random() * 2,
      opacity: 0.04 + Math.random() * 0.06,
    }));

    let t = 0;

    const makeBolt = (cx: number, cy: number) => {
      const angle = Math.random() * Math.PI * 2;
      const pts: [number,number][] = [];
      let x = cx, y = cy;
      const steps = 6 + Math.floor(Math.random() * 6);
      const len = 120 + Math.random() * 100;

      for (let i = 0; i <= steps; i++) {
        pts.push([x, y]);
        const stepLen = len / steps;
        x += Math.cos(angle) * stepLen + (Math.random() - 0.5) * 40;
        y += Math.sin(angle) * stepLen + (Math.random() - 0.5) * 40;
      }
      bolts.push({ pts, life: 0, max: 12 + Math.random() * 8, width: 1 + Math.random() * 2 });
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      t++;

      const cx = W / 2;
      const cy = H / 2;
      const orbRadius = Math.min(W, H) * 0.18;

      // === BEAMS ===
      for (const beam of beams) {
        beam.angle += beam.speed;
        const grad = ctx.createLinearGradient(
          cx, cy,
          cx + Math.cos(beam.angle) * beam.length,
          cy + Math.sin(beam.angle) * beam.length
        );
        grad.addColorStop(0, `rgba(220, 38, 38, ${beam.opacity * 2})`);
        grad.addColorStop(0.3, `rgba(220, 38, 38, ${beam.opacity})`);
        grad.addColorStop(1, "rgba(220, 38, 38, 0)");

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(beam.angle) * beam.length,
          cy + Math.sin(beam.angle) * beam.length
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = beam.width;
        ctx.stroke();
      }

      // === OUTER GLOW RINGS ===
      for (let i = 3; i >= 0; i--) {
        const r = orbRadius + 20 + i * 30;
        const pulse = Math.sin(t * 0.02 + i) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.03 * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // === ORB GLOW (multiple layers) ===
      // Huge ambient glow
      const ambientGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orbRadius * 3);
      ambientGrad.addColorStop(0, "rgba(220, 38, 38, 0.15)");
      ambientGrad.addColorStop(0.3, "rgba(220, 38, 38, 0.06)");
      ambientGrad.addColorStop(0.7, "rgba(220, 38, 38, 0.02)");
      ambientGrad.addColorStop(1, "rgba(220, 38, 38, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = ambientGrad;
      ctx.fill();

      // Main orb body
      const pulse = Math.sin(t * 0.03) * 0.15 + 0.85;
      const orbGrad = ctx.createRadialGradient(cx - orbRadius * 0.2, cy - orbRadius * 0.2, 0, cx, cy, orbRadius);
      orbGrad.addColorStop(0, `rgba(253, 83, 82, ${0.5 * pulse})`);
      orbGrad.addColorStop(0.4, `rgba(220, 38, 38, ${0.35 * pulse})`);
      orbGrad.addColorStop(0.7, `rgba(185, 28, 28, ${0.2 * pulse})`);
      orbGrad.addColorStop(1, "rgba(127, 29, 29, 0.05)");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius, 0, Math.PI * 2);
      ctx.fillStyle = orbGrad;
      ctx.fill();

      // Bright core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orbRadius * 0.4);
      coreGrad.addColorStop(0, `rgba(255, 200, 200, ${0.3 * pulse})`);
      coreGrad.addColorStop(0.5, `rgba(253, 83, 82, ${0.15 * pulse})`);
      coreGrad.addColorStop(1, "rgba(220, 38, 38, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Specular highlight
      const specGrad = ctx.createRadialGradient(cx - orbRadius * 0.25, cy - orbRadius * 0.3, 0, cx, cy, orbRadius * 0.6);
      specGrad.addColorStop(0, "rgba(255, 255, 255, 0.12)");
      specGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.03)");
      specGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = specGrad;
      ctx.fill();

      // === ORBITING DOTS ===
      for (const dot of dots) {
        dot.angle += dot.speed;
        const dx = cx + Math.cos(dot.angle) * dot.dist;
        const dy = cy + Math.sin(dot.angle) * dot.dist;
        const distFromOrb = dot.dist - orbRadius;
        const alpha = Math.max(0.1, 1 - distFromOrb / 150);

        // Trail
        ctx.beginPath();
        ctx.arc(dx, dy, dot.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${alpha * 0.1})`;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(dx, dy, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 83, 82, ${alpha})`;
        ctx.fill();
      }

      // === SPAWN PARTICLES ===
      if (t % 2 === 0) {
        const angle = Math.random() * Math.PI * 2;
        const dist = orbRadius + Math.random() * 10;
        const speed = 0.5 + Math.random() * 1.5;
        particles.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.8,
          vy: Math.sin(angle) * speed - Math.random() * 0.5,
          life: 0,
          max: 40 + Math.random() * 60,
          size: 1 + Math.random() * 2.5,
        });
      }

      // === DRAW PARTICLES ===
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.max) { particles.splice(i, 1); continue; }

        const alpha = 1 - p.life / p.max;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 83, 82, ${alpha * 0.8})`;
        ctx.fill();

        // Particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${alpha * 0.08})`;
        ctx.fill();
      }

      // === LIGHTNING ===
      if (t % 40 === 0) makeBolt(cx, cy);
      if (t % 60 === 0) makeBolt(cx, cy);

      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        if (b.life > b.max) { bolts.splice(i, 1); continue; }

        const alpha = 1 - b.life / b.max;

        // Bolt glow
        ctx.shadowColor = `rgba(253, 83, 82, ${alpha * 0.8})`;
        ctx.shadowBlur = 15;
        ctx.strokeStyle = `rgba(255, 180, 180, ${alpha * 0.9})`;
        ctx.lineWidth = b.width;
        ctx.beginPath();
        ctx.moveTo(b.pts[0][0], b.pts[0][1]);
        for (let j = 1; j < b.pts.length; j++) {
          ctx.lineTo(b.pts[j][0], b.pts[j][1]);
        }
        ctx.stroke();

        // Thinner bright core
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.lineWidth = b.width * 0.3;
        ctx.beginPath();
        ctx.moveTo(b.pts[0][0], b.pts[0][1]);
        for (let j = 1; j < b.pts.length; j++) {
          ctx.lineTo(b.pts[j][0], b.pts[j][1]);
        }
        ctx.stroke();

        ctx.shadowBlur = 0;
      }

      // === BOLT icon in center ===
      const iconSize = orbRadius * 0.45;
      const ix = cx - iconSize / 2;
      const iy = cy - iconSize / 2;
      const iconPulse = Math.sin(t * 0.05) * 0.2 + 0.8;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(iconPulse, iconPulse);
      ctx.translate(-cx, -cy);

      ctx.shadowColor = "rgba(220, 38, 38, 0.8)";
      ctx.shadowBlur = 20;
      ctx.fillStyle = `rgba(253, 83, 82, ${0.7 + iconPulse * 0.3})`;

      // Lightning bolt path
      ctx.beginPath();
      ctx.moveTo(ix + iconSize * 0.55, iy);
      ctx.lineTo(ix + iconSize * 0.2, iy + iconSize * 0.5);
      ctx.lineTo(ix + iconSize * 0.45, iy + iconSize * 0.5);
      ctx.lineTo(ix + iconSize * 0.35, iy + iconSize);
      ctx.lineTo(ix + iconSize * 0.8, iy + iconSize * 0.4);
      ctx.lineTo(ix + iconSize * 0.55, iy + iconSize * 0.4);
      ctx.closePath();
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.restore();

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
      className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]"
    />
  );
}
