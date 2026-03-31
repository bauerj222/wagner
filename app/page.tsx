"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Marquee } from "@/components/HeroOrb";
import { BackgroundPaths } from "@/components/ui/background-paths";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease },
});

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

function Stats() {
  const items = [
    { val: "1972", label: "Gegründet" },
    { val: "50+", label: "Jahre" },
    { val: "25", label: "Mitarbeiter" },
    { val: "2", label: "Meister" },
  ];
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.03] rounded-2xl overflow-hidden">
        {items.map((s, i) => (
          <motion.div key={s.label} {...scaleIn(i * 0.08)} className="bg-[#060606] p-8 lg:p-10 text-center">
            <span className="text-3xl sm:text-4xl font-bold text-white block tracking-tight">{s.val}</span>
            <span className="text-[11px] text-white/25 mt-2 block uppercase tracking-[0.15em]">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 lg:mb-20">
          <motion.div {...fadeLeft()} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#e85d04]/40" />
              <span className="text-[11px] text-[#e85d04]/70 uppercase tracking-[0.3em] font-medium">Leistungen</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Alles aus<br />einer Hand.
            </h2>
          </motion.div>
          <motion.div {...fadeRight(0.1)} className="lg:col-span-5 lg:col-start-7 flex items-end">
            <p className="text-[14px] text-white/35 leading-relaxed max-w-md">
              Von der kleinen Reparatur bis zur kompletten Elektroinstallation für Neubau und Gewerbe.
              Persönliche Betreuung durch unsere Meister.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.03] rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.06)}
              className="bg-[#060606] p-8 group hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease }}
                className="block h-[2px] bg-[#e85d04]/30 mb-6"
              />
              <span className="block text-[11px] text-white/15 mb-4 font-medium">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[15px] font-semibold text-white mb-2 group-hover:text-[#f48c06] transition-colors duration-300">{s.title}</h3>
              <p className="text-[13px] text-white/30 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.2)} className="mt-8">
          <Link href="/leistungen" className="text-[13px] text-white/30 hover:text-white transition-colors inline-flex items-center gap-2 group">
            Alle Leistungen im Detail
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              &rarr;
            </motion.span>
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
          <motion.div {...fadeLeft()} className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#e85d04]/40" />
              <span className="text-[11px] text-[#e85d04]/70 uppercase tracking-[0.3em] font-medium">Über uns</span>
            </div>
            <motion.h2 {...fadeUp(0.1)} className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-8">
              Drei Generationen.<br />
              <span className="text-white/20" style={{ fontFamily: "var(--font-display)" }}>
                <em>Ein Versprechen.</em>
              </span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-[14px] text-white/35 leading-relaxed max-w-lg mb-6">
              1972 von Ernst Wagner gegründet, wird das Unternehmen heute von Jürgen
              und Sebastian Wagner geführt. 2 Meister, 18 Gesellen, 5 Auszubildende —
              persönliche Betreuung in jeder Phase Ihres Projekts.
            </motion.p>
            <motion.blockquote
              {...fadeUp(0.3)}
              className="text-[14px] text-white/20 italic leading-relaxed max-w-lg border-l-2 border-[#e85d04]/20 pl-5 mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &bdquo;Unsere Kunden sind Meistersache.&ldquo;
            </motion.blockquote>
            <motion.div {...fadeUp(0.35)}>
              <Link href="/ueber-uns" className="text-[13px] text-white/30 hover:text-white transition-colors inline-flex items-center gap-2 group">
                Unsere Geschichte
                <motion.span className="inline-block" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>&rarr;</motion.span>
              </Link>
            </motion.div>
          </motion.div>

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
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] top-1 w-[5px] h-[5px] rounded-full bg-[#e85d04]/40" />
                  <span className="block text-[11px] text-[#e85d04]/50 uppercase tracking-wider mb-1">{item.year}</span>
                  <span className="block text-[13px] text-white/40">{item.text}</span>
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
        <motion.div {...scaleIn()} className="card-glow">
          <div className="relative bg-[var(--surface)] rounded-2xl px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#e85d04]/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <motion.div {...fadeLeft(0.1)} className="lg:col-span-7">
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                  Projekt besprechen?
                </h2>
                <p className="text-[14px] text-white/30 max-w-md">
                  Ob Neubau, Sanierung oder Reparatur — wir beraten persönlich und unverbindlich.
                </p>
              </motion.div>
              <motion.div {...fadeRight(0.2)} className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
                <Link href="/kontakt" className="px-6 py-3 text-[13px] font-medium bg-gradient-to-r from-[#e85d04] to-[#f48c06] text-white rounded-full hover:opacity-90 transition-opacity">
                  Kontakt aufnehmen
                </Link>
                <a href="tel:08931926484" className="px-6 py-3 text-[13px] text-white/40 rounded-full border border-white/[0.06] hover:border-white/[0.12] hover:text-white transition-all">
                  (089) 319 26 84
                </a>
              </motion.div>
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
