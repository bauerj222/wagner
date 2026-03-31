"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { GridBackground, Counter, Marquee } from "@/components/HeroOrb";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const },
};

const SERVICES = [
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Elektroinstallationen", desc: "Komplette Elektroinstallationen für Wohnbau, Sanierung und Neubau — fachgerecht und zuverlässig." },
  { icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", title: "EDV-Netzwerke", desc: "Professionelle Kabelverlegung für EDV-Netze inkl. Anschlusstechnik und Messprotokoll." },
  { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Kundendienst", desc: "Schneller Service, Wartung und technische Unterstützung — wir sind für Sie da." },
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Gewerbe & Industrie", desc: "Elektroarbeiten für Betriebsgebäude, Bestandsgebäude und Neubauprojekte jeder Größe." },
  { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0", title: "Kabel & Sat", desc: "Installation und Einrichtung von Kabel- und Satellitensystemen für besten Empfang." },
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Kernbohrungen", desc: "Präzise Bohrungen in Ziegel und Beton bis 250mm Durchmesser." },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-medium bg-white/[0.03] text-white/40 border border-white/[0.06] mb-10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Innungs-Meisterbetrieb seit 1972
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] as const }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="text-gradient">Elektrotechnik aus</span>
          <br />
          <span className="text-gradient-red">Meisterhand.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] as const }}
          className="text-lg lg:text-xl text-white/35 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Elektro Wagner — Ihr zuverlässiger Partner für Elektroinstallationen
          in Eching bei München. 25 Mitarbeiter, 2 Meister, über 50 Jahre Erfahrung.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.32, 0.72, 0, 1] as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/kontakt"
            className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] glow-red"
          >
            <span className="relative z-10">Projekt besprechen</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <a
            href="tel:08931926484"
            className="px-8 py-4 text-white/50 font-medium rounded-full border border-white/[0.08] hover:border-white/15 hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-sm"
          >
            (089) 319 26 84
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.32, 0.72, 0, 1] as const }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.06]"
        >
          {[
            { value: 1972, label: "Gegründet", suffix: "" },
            { value: 50, label: "Jahre Erfahrung", suffix: "+" },
            { value: 25, label: "Mitarbeiter", suffix: "" },
            { value: 2, label: "Meister", suffix: "" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="py-8 px-4 text-center bg-background/60 backdrop-blur-sm"
            >
              <span className="text-3xl lg:text-4xl font-bold text-gradient-red block">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[10px] text-white/25 mt-2 block uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary bg-primary/10 border border-primary/20 mb-6">
            Leistungen
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gradient mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-white/30 max-w-lg mx-auto text-base lg:text-lg">
            Von der kleinen Reparatur bis zur kompletten Elektroinstallation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.32, 0.72, 0, 1] as const }}
            >
              <div className="border-glow group relative p-6 lg:p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10 text-center">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-white/35 hover:text-primary-400 transition-colors duration-300">
            Alle Leistungen im Detail
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Large card — spans 3 */}
          <motion.div {...fadeUp} className="lg:col-span-3 border-glow relative p-8 lg:p-12 bg-card/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary bg-primary/10 border border-primary/20 mb-6">
                Über uns
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gradient mb-6">
                Familienbetrieb in<br />3. Generation
              </h2>
              <p className="text-white/35 leading-relaxed mb-4 max-w-lg">
                1972 von Ernst Wagner gegründet, wird das Unternehmen heute von Jürgen
                und Sebastian Wagner als Meisterbetrieb geführt.
              </p>
              <p className="text-white/25 leading-relaxed mb-8 max-w-lg text-sm italic">
                &bdquo;Unsere Kunden sind Meistersache. Wenn es um Beratung, Anfragen und Angebote geht,
                kümmern wir uns persönlich.&ldquo;
              </p>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white/50 border border-white/[0.08] rounded-full hover:text-white hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300"
              >
                Mehr erfahren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </motion.div>

          {/* Right column — stacked */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] as const }}
              className="border-glow relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] flex-1 flex flex-col justify-center text-center"
            >
              <span className="text-5xl lg:text-6xl font-bold text-gradient-red block">
                <Counter value={50} suffix="+" />
              </span>
              <span className="text-sm text-white/25 mt-2">Jahre Erfahrung</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] as const }}
              className="border-glow relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] flex-1 flex flex-col justify-center text-center"
            >
              <span className="text-5xl lg:text-6xl font-bold text-gradient-red block">
                <Counter value={25} />
              </span>
              <span className="text-sm text-white/25 mt-2">Mitarbeiter</span>
              <div className="flex justify-center gap-4 mt-3 text-[10px] text-white/15 uppercase tracking-wider">
                <span>2 Meister</span>
                <span>&middot;</span>
                <span>18 Gesellen</span>
                <span>&middot;</span>
                <span>5 Azubis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="text-gradient">Projekt</span>{" "}
            <span className="text-gradient-red">starten?</span>
          </h2>
          <p className="text-lg text-white/30 mb-10 max-w-xl mx-auto">
            Ob Neubau, Sanierung oder Reparatur — wir beraten Sie persönlich und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] glow-red"
            >
              <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <a
              href="tel:08931926484"
              className="px-8 py-4 text-white/50 font-medium rounded-full border border-white/[0.08] hover:border-white/15 hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300"
            >
              (089) 319 26 84
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}
