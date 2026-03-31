"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Counter, Marquee } from "@/components/HeroOrb";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
});

const SERVICES = [
  { title: "Elektroinstallationen", desc: "Wohnbau, Sanierung und Neubau — fachgerecht und zuverlässig.", tag: "Kernkompetenz" },
  { title: "EDV-Netzwerke", desc: "Kabelverlegung inkl. Anschlusstechnik und Messprotokoll.", tag: "IT" },
  { title: "Kundendienst", desc: "Schneller Service, Wartung und technische Unterstützung.", tag: "Service" },
  { title: "Gewerbe & Industrie", desc: "Elektroarbeiten für Betriebsgebäude und Neubauprojekte.", tag: "Gewerbe" },
  { title: "Kabel & Sat", desc: "Installation von Kabel- und Satellitensystemen.", tag: "Multimedia" },
  { title: "Kernbohrungen", desc: "Präzise Bohrungen in Ziegel und Beton bis 250mm.", tag: "Spezial" },
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          {/* Main content — 8 cols */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] text-red-500/80 font-medium uppercase tracking-[0.25em] mb-8"
            >
              Meisterbetrieb seit 1972
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="leading-[0.95] mb-8"
            >
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold tracking-[-0.03em] text-white">
                Elektrotechnik
              </span>
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold tracking-[-0.03em] text-white/20">
                aus{" "}
                <em className="not-italic text-white/90" style={{ fontFamily: "var(--font-serif)" }}>
                  Meisterhand
                </em>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] sm:text-base text-white/35 max-w-md leading-relaxed mb-10"
            >
              Elektro Wagner — Ihr zuverlässiger Partner für Elektroinstallationen
              in Eching bei München. 25 Fachkräfte, persönliche Betreuung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/kontakt"
                className="px-7 py-3.5 text-[13px] font-semibold bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Projekt besprechen
              </Link>
              <a
                href="tel:08931926484"
                className="px-7 py-3.5 text-[13px] font-medium text-white/50 rounded-full border border-white/[0.08] hover:bg-white/[0.04] hover:text-white transition-all"
              >
                (089) 319 26 84
              </a>
            </motion.div>
          </div>

          {/* Stats column — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-0 border-l border-white/[0.04] pl-8">
            {[
              { val: 1972, label: "Gegründet" },
              { val: 50, label: "Jahre Erfahrung", suf: "+" },
              { val: 25, label: "Fachkräfte" },
            ].map((s, i) => (
              <motion.div key={s.label} {...stagger(i)} className="py-6 border-b border-white/[0.04] last:border-b-0">
                <span className="block text-3xl font-bold text-white tracking-tight">
                  <Counter value={s.val} suffix={s.suf || ""} />
                </span>
                <span className="block text-[11px] text-white/25 mt-1 uppercase tracking-[0.15em]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] text-red-500/80 font-medium uppercase tracking-[0.25em] mb-3">Leistungen</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Was wir tun<span className="text-red-500">.</span>
            </h2>
          </div>
          <Link href="/leistungen" className="text-[13px] text-white/30 hover:text-white transition-colors inline-flex items-center gap-1.5 shrink-0">
            Alle Leistungen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              <div className="animated-border group h-full">
                <div className="relative bg-[#0a0a0a] rounded-2xl p-7 h-full border border-white/[0.03]">
                  <span className="text-[10px] text-white/15 uppercase tracking-[0.2em] font-medium">{s.tag}</span>
                  <h3 className="text-[15px] font-semibold text-white mt-4 mb-2 group-hover:text-red-400 transition-colors duration-300">{s.title}</h3>
                  <p className="text-[13px] text-white/30 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          <motion.div {...reveal} className="lg:col-span-3 animated-border">
            <div className="relative bg-[#0a0a0a] rounded-2xl p-8 lg:p-12 border border-white/[0.03] h-full">
              <p className="text-[11px] text-red-500/80 font-medium uppercase tracking-[0.25em] mb-6">Über uns</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Familie<span className="text-red-500">.</span><br />
                <span className="text-white/20">Seit drei Generationen.</span>
              </h2>
              <p className="text-[14px] text-white/30 leading-relaxed mb-4 max-w-md">
                1972 von Ernst Wagner gegründet, wird das Unternehmen heute von Jürgen
                und Sebastian Wagner als Meisterbetrieb geführt. 25 Mitarbeiter, davon
                2 Meister, 18 Gesellen und 5 Auszubildende.
              </p>
              <blockquote className="text-[13px] text-white/20 leading-relaxed mb-8 max-w-md border-l-2 border-red-500/30 pl-4 italic" style={{ fontFamily: "var(--font-serif)" }}>
                &bdquo;Unsere Kunden sind Meistersache. Wenn es um Beratung, Anfragen und
                Angebote geht, kümmern wir uns persönlich.&ldquo;
              </blockquote>
              <Link href="/ueber-uns" className="text-[13px] text-white/30 hover:text-white transition-colors inline-flex items-center gap-1.5">
                Geschichte lesen
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex-1 animated-border">
              <div className="relative bg-[#0a0a0a] rounded-2xl p-8 border border-white/[0.03] h-full flex flex-col justify-center text-center">
                <span className="text-5xl font-bold text-white block tracking-tight"><Counter value={50} suffix="+" /></span>
                <span className="text-[11px] text-white/20 mt-2 block uppercase tracking-[0.15em]">Jahre</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }} className="flex-1 animated-border">
              <div className="relative bg-[#0a0a0a] rounded-2xl p-8 border border-white/[0.03] h-full flex flex-col justify-center text-center">
                <span className="text-5xl font-bold text-white block tracking-tight"><Counter value={25} /></span>
                <span className="text-[11px] text-white/20 mt-2 block uppercase tracking-[0.15em]">Mitarbeiter</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal} className="animated-border">
          <div className="relative bg-[#0a0a0a] rounded-2xl p-12 sm:p-16 lg:p-24 border border-white/[0.03] text-center overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-50" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Bereit<span className="text-red-500">?</span>
              </h2>
              <p className="text-[14px] sm:text-base text-white/30 mb-10 max-w-md mx-auto">
                Ob Neubau, Sanierung oder Reparatur — wir beraten Sie persönlich.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/kontakt" className="px-7 py-3.5 text-[13px] font-semibold bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                  Kontakt aufnehmen
                </Link>
                <a href="tel:08931926484" className="px-7 py-3.5 text-[13px] font-medium text-white/40 rounded-full border border-white/[0.08] hover:bg-white/[0.04] hover:text-white transition-all">
                  (089) 319 26 84
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <CTA />
    </main>
  );
}
