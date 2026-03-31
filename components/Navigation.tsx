"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [s, setS] = useState(false);
  const [o, setO] = useState(false);

  useEffect(() => {
    const fn = () => setS(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s ? "bg-[#060606]/90 backdrop-blur-2xl" : ""}`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="font-medium text-white text-[15px] tracking-[-0.01em]">
            Elektro Wagner
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className="px-4 py-2 text-[13px] text-[#888] hover:text-white rounded-lg hover:bg-white/[0.03] transition-all duration-200">
                {l.label}
              </Link>
            ))}
            <div className="w-px h-5 bg-white/[0.06] mx-2" />
            <a href="tel:08931926484" className="ml-1 px-4 py-2 text-[13px] text-white rounded-lg bg-white/[0.05] hover:bg-white/[0.08] transition-colors border border-white/[0.06]">
              Anrufen
            </a>
          </nav>

          <button onClick={() => setO(!o)} className="md:hidden w-8 h-8 flex items-center justify-center" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              {o ? <><line x1="4" y1="4" x2="14" y2="14" /><line x1="14" y1="4" x2="4" y2="14" /></> : <><line x1="3" y1="5" x2="15" y2="5" /><line x1="3" y1="9" x2="15" y2="9" /><line x1="3" y1="13" x2="15" y2="13" /></>}
            </svg>
          </button>
        </div>
      </div>

      {o && (
        <div className="md:hidden border-t border-white/[0.04] bg-[#060606]/95 backdrop-blur-2xl px-6 py-5">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setO(false)} className="block py-2 text-[15px] text-[#888] hover:text-white">{l.label}</Link>
          ))}
          <a href="tel:08931926484" className="mt-3 block text-center py-2.5 text-[14px] text-white bg-white/[0.05] rounded-lg border border-white/[0.06]">
            (089) 319 26 84
          </a>
        </div>
      )}
    </header>
  );
}
