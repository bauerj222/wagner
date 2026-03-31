"use client";

import { useEffect, useRef } from "react";

export default function WireDecoration() {
  const leftRef = useRef<SVGSVGElement>(null);
  const rightRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      [leftRef, rightRef].forEach((ref, side) => {
        if (!ref.current) return;
        const paths = ref.current.querySelectorAll<SVGPathElement>(".wire-path");
        paths.forEach((path, i) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len * (1 - progress * (1.2 + i * 0.15))}`;
        });

        const sparks = ref.current.querySelectorAll<SVGCircleElement>(".spark");
        sparks.forEach((spark, i) => {
          const p = (progress * 4 + i * 0.3 + side * 0.5) % 1;
          const opacity = p > 0.7 ? Math.sin((p - 0.7) / 0.3 * Math.PI) : 0;
          spark.setAttribute("opacity", String(opacity));
          spark.setAttribute("r", String(2 + Math.sin(scrollY * 0.03 + i * 1.5) * 1.5));
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wirePaths = (mirror: boolean) => (
    <>
      <path
        className="wire-path"
        d={mirror
          ? "M30 0 L30 200 Q30 230 40 250 L40 400 Q40 430 30 450 L30 600 Q30 630 45 650 L45 800 Q45 830 30 850 L30 1000"
          : "M30 0 L30 200 Q30 230 20 250 L20 400 Q20 430 30 450 L30 600 Q30 630 15 650 L15 800 Q15 830 30 850 L30 1000"
        }
        stroke="url(#wireGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        className="wire-path"
        d={mirror
          ? "M15 0 L15 150 Q15 180 25 200 L25 350 Q25 380 15 400 L15 550 Q15 580 20 600 L20 750 Q20 780 15 800 L15 1000"
          : "M45 0 L45 150 Q45 180 35 200 L35 350 Q35 380 45 400 L45 550 Q45 580 40 600 L40 750 Q40 780 45 800 L45 1000"
        }
        stroke="url(#wireGrad)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      {[250, 450, 650, 400, 830].map((cy, i) => (
        <circle key={i} className="spark" cx={mirror ? 40 - (i % 2) * 20 : 20 + (i % 2) * 20} cy={cy} r="2" fill="#DC2626" opacity="0" />
      ))}
    </>
  );

  return (
    <>
      <svg ref={leftRef} className="fixed left-0 top-0 w-10 md:w-14 h-full z-[5] pointer-events-none" viewBox="0 0 60 1000" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="wireGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
            <stop offset="20%" stopColor="#DC2626" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#DC2626" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#DC2626" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
          </linearGradient>
        </defs>
        {wirePaths(false)}
      </svg>
      <svg ref={rightRef} className="fixed right-0 top-0 w-10 md:w-14 h-full z-[5] pointer-events-none" viewBox="0 0 60 1000" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="wireGradR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
            <stop offset="20%" stopColor="#DC2626" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#DC2626" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#DC2626" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
          </linearGradient>
        </defs>
        {wirePaths(true)}
      </svg>
    </>
  );
}
