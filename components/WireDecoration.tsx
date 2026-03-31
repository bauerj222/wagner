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

      // Animate stroke-dashoffset based on scroll
      if (leftRef.current) {
        const paths = leftRef.current.querySelectorAll<SVGPathElement>(".wire-path");
        paths.forEach((path, i) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len * (1 - progress * (1 + i * 0.15))}`;
        });

        // Animate sparks
        const sparks = leftRef.current.querySelectorAll<SVGCircleElement>(".spark");
        sparks.forEach((spark, i) => {
          const sparkProgress = (progress * 3 + i * 0.4) % 1;
          spark.setAttribute("opacity", String(sparkProgress > 0.8 ? (1 - sparkProgress) * 5 : sparkProgress < 0.1 ? sparkProgress * 10 : 1));
          spark.setAttribute("r", String(1.5 + Math.sin(scrollY * 0.02 + i) * 1));
        });
      }

      if (rightRef.current) {
        const paths = rightRef.current.querySelectorAll<SVGPathElement>(".wire-path");
        paths.forEach((path, i) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len * (1 - progress * (1 + i * 0.12))}`;
        });

        const sparks = rightRef.current.querySelectorAll<SVGCircleElement>(".spark");
        sparks.forEach((spark, i) => {
          const sparkProgress = (progress * 3 + i * 0.3 + 0.5) % 1;
          spark.setAttribute("opacity", String(sparkProgress > 0.85 ? (1 - sparkProgress) * 6.67 : sparkProgress < 0.1 ? sparkProgress * 10 : 1));
          spark.setAttribute("r", String(1.5 + Math.sin(scrollY * 0.025 + i * 2) * 1));
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Left wire decoration */}
      <svg
        ref={leftRef}
        className="fixed left-0 top-0 w-12 md:w-16 h-full z-[5] pointer-events-none opacity-[0.12]"
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Main wire */}
        <path
          className="wire-path"
          d="M30 0 L30 200 Q30 230 20 250 L20 400 Q20 430 30 450 L30 600 Q30 630 15 650 L15 800 Q15 830 30 850 L30 1000"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Secondary wire */}
        <path
          className="wire-path"
          d="M45 0 L45 150 Q45 180 35 200 L35 350 Q35 380 45 400 L45 550 Q45 580 40 600 L40 750 Q40 780 45 800 L45 1000"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Branch wire */}
        <path
          className="wire-path"
          d="M30 250 Q40 260 50 250 M20 450 Q10 460 5 480 M30 650 Q40 660 55 655"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Sparks */}
        <circle className="spark" cx="30" cy="250" r="2" fill="var(--primary-500)" />
        <circle className="spark" cx="20" cy="450" r="1.5" fill="var(--primary-400)" />
        <circle className="spark" cx="30" cy="650" r="2" fill="var(--primary-500)" />
        <circle className="spark" cx="45" cy="400" r="1.5" fill="var(--primary-400)" />
        <circle className="spark" cx="15" cy="850" r="2" fill="var(--primary-500)" />
      </svg>

      {/* Right wire decoration */}
      <svg
        ref={rightRef}
        className="fixed right-0 top-0 w-12 md:w-16 h-full z-[5] pointer-events-none opacity-[0.12]"
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="wire-path"
          d="M30 0 L30 180 Q30 210 40 230 L40 380 Q40 410 30 430 L30 580 Q30 610 45 630 L45 780 Q45 810 30 830 L30 1000"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="wire-path"
          d="M15 0 L15 130 Q15 160 25 180 L25 330 Q25 360 15 380 L15 530 Q15 560 20 580 L20 730 Q20 760 15 780 L15 1000"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="wire-path"
          d="M40 230 Q50 240 55 260 M30 430 Q20 440 10 435 M45 630 Q55 640 58 660"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle className="spark" cx="40" cy="230" r="2" fill="var(--primary-500)" />
        <circle className="spark" cx="30" cy="430" r="1.5" fill="var(--primary-400)" />
        <circle className="spark" cx="45" cy="630" r="2" fill="var(--primary-500)" />
        <circle className="spark" cx="15" cy="380" r="1.5" fill="var(--primary-400)" />
        <circle className="spark" cx="30" cy="830" r="2" fill="var(--primary-500)" />
      </svg>
    </>
  );
}
