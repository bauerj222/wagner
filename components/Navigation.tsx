"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.03]" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
          Elektro Wagner
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="text-[13px] text-white/40 hover:text-white transition-colors duration-300">
              {l.label}
            </Link>
          ))}
          <a href="tel:08931926484" className="text-[13px] font-medium text-white px-5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-colors border border-white/[0.06]">
            Anrufen
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menü">
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-[1.5px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/[0.03] px-6 py-5 space-y-3">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[15px] text-white/50 hover:text-white py-1.5">{l.label}</Link>
          ))}
          <a href="tel:08931926484" className="block text-[14px] font-medium text-white bg-white/[0.06] px-4 py-2.5 rounded-full text-center mt-3 border border-white/[0.06]">
            (089) 319 26 84
          </a>
        </div>
      )}
    </header>
  );
}
