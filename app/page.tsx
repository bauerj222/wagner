"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { GridSpotlight, Counter, Marquee } from "@/components/HeroOrb";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

const SERVICES = [
  { title: "Elektroinstallationen", desc: "Wohnbau, Sanierung und Neubau — fachgerecht und zuverlässig.", tag: "Kernkompetenz" },
  { title: "EDV-Netzwerke", desc: "Kabelverlegung inkl. Anschlusstechnik und Messprotokoll.", tag: "IT" },
  { title: "Kundendienst", desc: "Schneller Service, Wartung und technische Unterstützung.", tag: "Service" },
  { title: "Gewerbe & Industrie", desc: "Elektroarbeiten für Betriebsgebäude und Neubauprojekte.", tag: "Gewerbe" },
  { title: "Kabel & Sat", desc: "Installation von Kabel- und Satellitensystemen.", tag: "Multimedia" },
  { title: "Kernbohrungen", desc: "Präzise Bohrungen in Ziegel und Beton bis 250mm.", tag: "Spezial" },
];

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const o = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridSpotlight />

      <motion.div style={{ y, opacity: o }} className="relative z-10 max-w-3xl mx-auto px-5 text-center pt-28 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[13px] text-zinc-500 mb-6"
        >
          Innungs-Meisterbetrieb seit 1972
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white mb-6"
        >
          Elektrotechnik
          <br />
          aus Meisterhand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          25 Mitarbeiter. 2 Meister. Über 50 Jahre Erfahrung.
          Ihr Elektrobetrieb in Eching bei München.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/kontakt"
            className="px-6 py-3 text-[14px] font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Projekt besprechen
          </Link>
          <a
            href="tel:08931926484"
            className="px-6 py-3 text-[14px] font-medium text-zinc-400 rounded-lg border border-white/[0.08] hover:bg-white/[0.04] hover:text-white transition-all"
          >
            (089) 319 26 84
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}

function Stats() {
  const items = [
    { val: 1972, label: "Gegründet" },
    { val: 50, label: "Jahre Erfahrung", suf: "+" },
    { val: 25, label: "Mitarbeiter" },
    { val: 2, label: "Meister" },
  ];
  return (
    <section className="py-16 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] rounded-xl overflow-hidden bg-white/[0.04]">
        {items.map((s, i) => (
          <motion.div key={s.label} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="bg-[#0a0a0a] p-8 text-center">
            <span className="text-3xl sm:text-4xl font-semibold text-white block">
              <Counter value={s.val} suffix={s.suf || ""} />
            </span>
            <span className="text-[11px] text-zinc-600 mt-2 block uppercase tracking-widest">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 lg:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal} className="mb-14">
          <p className="text-[12px] text-red-500 font-medium uppercase tracking-widest mb-3">Leistungen</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
            Alles aus einer Hand.
          </h2>
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
                <div className="relative bg-[#0f0f0f] rounded-2xl p-6 h-full border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">{s.tag}</span>
                  <h3 className="text-[15px] font-medium text-white mt-3 mb-2 group-hover:text-red-400 transition-colors">{s.title}</h3>
                  <p className="text-[13px] text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="mt-8">
          <Link href="/leistungen" className="text-[13px] text-zinc-600 hover:text-white transition-colors inline-flex items-center gap-1.5">
            Alle Leistungen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 lg:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          <motion.div {...reveal} className="lg:col-span-3 animated-border">
            <div className="relative bg-[#0f0f0f] rounded-2xl p-8 lg:p-12 border border-white/[0.04] h-full">
              <p className="text-[12px] text-red-500 font-medium uppercase tracking-widest mb-4">Über uns</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-5">
                Familienbetrieb in<br />dritter Generation.
              </h2>
              <p className="text-[14px] text-zinc-500 leading-relaxed mb-4 max-w-lg">
                1972 von Ernst Wagner gegründet, wird das Unternehmen heute von Jürgen
                und Sebastian Wagner als Meisterbetrieb geführt. Mit 25 Mitarbeitern
                sind wir Ihr kompetenter Partner im Großraum München.
              </p>
              <p className="text-[13px] text-zinc-600 leading-relaxed mb-8 max-w-lg italic border-l-2 border-red-500/20 pl-4">
                &bdquo;Unsere Kunden sind Meistersache. Wenn es um Beratung, Anfragen und
                Angebote geht, kümmern wir uns persönlich.&ldquo;
              </p>
              <Link href="/ueber-uns" className="text-[13px] text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1.5">
                Mehr erfahren
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <motion.div {...reveal} transition={{ delay: 0.1 }} className="flex-1 animated-border">
              <div className="relative bg-[#0f0f0f] rounded-2xl p-8 border border-white/[0.04] h-full flex flex-col justify-center text-center">
                <span className="text-4xl sm:text-5xl font-semibold text-white block">
                  <Counter value={50} suffix="+" />
                </span>
                <span className="text-[12px] text-zinc-600 mt-2 block">Jahre Erfahrung</span>
              </div>
            </motion.div>
            <motion.div {...reveal} transition={{ delay: 0.18 }} className="flex-1 animated-border">
              <div className="relative bg-[#0f0f0f] rounded-2xl p-8 border border-white/[0.04] h-full flex flex-col justify-center text-center">
                <span className="text-4xl sm:text-5xl font-semibold text-white block">
                  <Counter value={25} />
                </span>
                <span className="text-[12px] text-zinc-600 mt-2 block">Mitarbeiter</span>
                <div className="flex justify-center gap-3 mt-3 text-[10px] text-zinc-700 tracking-wider">
                  <span>2 Meister</span>
                  <span>·</span>
                  <span>18 Gesellen</span>
                  <span>·</span>
                  <span>5 Azubis</span>
                </div>
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
    <section className="py-20 lg:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal} className="animated-border">
          <div className="relative bg-[#0f0f0f] rounded-2xl p-10 sm:p-14 lg:p-20 border border-white/[0.04] text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-red-500/[0.03] rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
                Projekt besprechen?
              </h2>
              <p className="text-[14px] sm:text-base text-zinc-500 mb-8 max-w-md mx-auto">
                Ob Neubau, Sanierung oder Reparatur — wir beraten Sie persönlich und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/kontakt" className="px-6 py-3 text-[14px] font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
                  Kontakt aufnehmen
                </Link>
                <a href="tel:08931926484" className="px-6 py-3 text-[14px] font-medium text-zinc-400 rounded-lg border border-white/[0.08] hover:bg-white/[0.04] hover:text-white transition-all">
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
      <Stats />
      <Services />
      <About />
      <CTA />
    </main>
  );
}
