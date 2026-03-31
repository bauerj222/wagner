"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Marquee } from "@/components/HeroOrb";
import { BackgroundPaths } from "@/components/ui/background-paths";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  { title: "Elektroinstallation", desc: "Wohnbau, Sanierung, Neubau — von der Planung bis zur Abnahme." },
  { title: "EDV-Netzwerke", desc: "Strukturierte Verkabelung, Anschlusstechnik und Messprotokoll." },
  { title: "Kundendienst", desc: "Schnelle Hilfe bei Störungen, Wartung und Reparaturen." },
  { title: "Gewerbe & Industrie", desc: "Betriebsgebäude, Neubauprojekte und Bestandssanierung." },
  { title: "Kabel & Sat", desc: "TV- und Satellitenanlagen für Privat und Mehrfamilienhäuser." },
  { title: "Kernbohrungen", desc: "Durchmesser bis 250mm in Ziegel, Beton und Stahlbeton." },
];

function Hero() {
  return (
    <BackgroundPaths
      title="Elektrotechnik aus Meisterhand"
      subtitle="Innungs-Meisterbetrieb seit 1972 in Eching bei München. 25 Mitarbeiter, 2 Meister, über 50 Jahre Erfahrung."
    />
  );
}

function Services() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 lg:mb-20"
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]/40" />
              <span className="text-[11px] text-[#dc2626]/70 uppercase tracking-[0.3em] font-medium">Leistungen</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Alles aus<br />einer Hand.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-6 flex items-end">
            <p className="text-[14px] text-[#555] leading-relaxed max-w-md">
              Von der kleinen Reparatur bis zur kompletten Elektroinstallation für Neubau und Gewerbe.
              Persönliche Betreuung durch unsere Meister.
            </p>
          </div>
        </motion.div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.03] rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              className="bg-[#060606] p-8 group hover:bg-[#0a0a0a] transition-colors duration-300"
            >
              <span className="block text-[11px] text-[#333] mb-6 font-medium">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[15px] font-semibold text-white mb-2 group-hover:text-[#dc2626] transition-colors duration-300">{s.title}</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link href="/leistungen" className="text-[13px] text-[#555] hover:text-white transition-colors inline-flex items-center gap-2">
            Alle Leistungen im Detail
            <span className="text-[10px]">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 border-t border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Left — big statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#dc2626]/40" />
              <span className="text-[11px] text-[#dc2626]/70 uppercase tracking-[0.3em] font-medium">Über uns</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-8">
              Drei Generationen.<br />
              <span className="text-[#333]" style={{ fontFamily: "var(--font-display)" }}>
                <em>Ein Versprechen.</em>
              </span>
            </h2>
            <p className="text-[14px] text-[#555] leading-relaxed max-w-lg mb-6">
              1972 von Ernst Wagner gegründet, wird das Unternehmen heute von Jürgen
              und Sebastian Wagner geführt. 2 Meister, 18 Gesellen, 5 Auszubildende —
              persönliche Betreuung in jeder Phase Ihres Projekts.
            </p>
            <blockquote className="text-[14px] text-[#444] italic leading-relaxed max-w-lg border-l border-white/[0.06] pl-5 mb-8" style={{ fontFamily: "var(--font-display)" }}>
              &bdquo;Unsere Kunden sind Meistersache.&ldquo;
            </blockquote>
            <Link href="/ueber-uns" className="text-[13px] text-[#555] hover:text-white transition-colors inline-flex items-center gap-2">
              Unsere Geschichte
              <span className="text-[10px]">&rarr;</span>
            </Link>
          </motion.div>

          {/* Right — timeline */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-l border-white/[0.04] pl-8 space-y-8">
              {[
                { year: "1972", text: "Gründung durch Ernst Wagner" },
                { year: "1996", text: "Jürgen Wagner übernimmt" },
                { year: "2015", text: "Sebastian Wagner wird Meister" },
                { year: "2021", text: "Umwandlung in GmbH & Co. KG" },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] top-1 w-[5px] h-[5px] rounded-full bg-[#dc2626]/30" />
                  <span className="block text-[11px] text-[#dc2626]/50 uppercase tracking-wider mb-1">{item.year}</span>
                  <span className="block text-[13px] text-[#666]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="card-glow"
        >
          <div className="relative bg-[var(--surface)] rounded-2xl px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#dc2626]/[0.025] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                  Projekt besprechen?
                </h2>
                <p className="text-[14px] text-[#555] max-w-md">
                  Ob Neubau, Sanierung oder Reparatur — wir beraten persönlich und unverbindlich.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
                <Link href="/kontakt" className="px-6 py-3 text-[13px] font-medium bg-white text-[#060606] rounded-full hover:bg-white/90 transition-colors">
                  Kontakt aufnehmen
                </Link>
                <a href="tel:08931926484" className="px-6 py-3 text-[13px] text-[#666] rounded-full border border-white/[0.06] hover:border-white/[0.12] hover:text-white transition-all">
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
