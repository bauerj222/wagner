"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold text-white tracking-tight">
            ELEKTRO <span className="text-gradient-red">WAGNER</span>
          </span>
          <span className="text-[8px] text-white/30 font-medium tracking-[0.2em] uppercase">
            Meisterbetrieb seit 1972
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:08931926484"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-500 transition-all duration-300 glow-red-sm"
          >
            Anrufen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menü"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-background/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:08931926484"
            className="mt-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full text-center"
          >
            (089) 319 26 84
          </a>
        </div>
      </div>
    </nav>
  );
}
