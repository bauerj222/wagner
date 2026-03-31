"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#060606]/80 backdrop-blur-2xl border-b border-white/[0.04]" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e85d04] to-[#f48c06] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-semibold text-white text-[15px] tracking-[-0.01em]">
              Elektro Wagner
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className="px-4 py-2 text-[13px] text-white/40 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200">
                {l.label}
              </Link>
            ))}
            <div className="w-px h-5 bg-white/[0.06] mx-3" />
            <a href="tel:08931926484" className="ml-1 px-5 py-2 text-[13px] font-medium text-white rounded-lg bg-gradient-to-r from-[#e85d04] to-[#f48c06] hover:opacity-90 transition-opacity">
              Anrufen
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex items-center justify-center" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              {open ? <><line x1="4" y1="4" x2="14" y2="14" /><line x1="14" y1="4" x2="4" y2="14" /></> : <><line x1="3" y1="5" x2="15" y2="5" /><line x1="3" y1="9" x2="15" y2="9" /><line x1="3" y1="13" x2="15" y2="13" /></>}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/[0.04] bg-[#060606]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-5">
              {LINKS.map((l, i) => (
                <motion.div key={l.href} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-[15px] text-white/50 hover:text-white">{l.label}</Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                href="tel:08931926484"
                className="mt-3 block text-center py-2.5 text-[14px] font-medium text-white bg-gradient-to-r from-[#e85d04] to-[#f48c06] rounded-lg"
              >
                (089) 319 26 84
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
