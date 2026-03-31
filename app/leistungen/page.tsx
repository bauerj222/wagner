"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const services = [
  {
    number: "01",
    title: "Elektroinstallationen",
    description:
      "Komplette Elektroinstallation f\u00fcr Wohnbau, Sanierung und Neubau \u2013 von der Planung bis zur Abnahme.",
    bullets: [
      "Neuinstallation & Komplettsanierung",
      "Z\u00e4hlerschr\u00e4nke & Unterverteilungen",
      "Beleuchtungskonzepte & Smart Home",
      "Pr\u00fcfung nach VDE-Normen",
    ],
  },
  {
    number: "02",
    title: "Betriebs-, Alt- & Neubauten",
    description:
      "Gewerbliche Elektrotechnik f\u00fcr Betriebe jeder Gr\u00f6\u00dfe \u2013 vom kleinen Laden bis zur Produktionshalle.",
    bullets: [
      "Industrieinstallationen",
      "Starkstromanlagen",
      "Maschineneinspeisung",
      "Erweiterung bestehender Anlagen",
    ],
  },
  {
    number: "03",
    title: "Kundendienst-Service",
    description:
      "Schnelle Hilfe bei St\u00f6rungen, regelm\u00e4\u00dfige Wartung und zuverl\u00e4ssige Reparaturen.",
    bullets: [
      "24h-Notdienst f\u00fcr Bestandskunden",
      "Fehlersuche & Diagnose",
      "Wartungsvertr\u00e4ge",
      "E-Check & Sicherheitspr\u00fcfung",
    ],
  },
  {
    number: "04",
    title: "EDV-Netzwerke",
    description:
      "Professionelle Netzwerkverkabelung mit dokumentierter Messtechnik f\u00fcr zuverl\u00e4ssige IT-Infrastruktur.",
    bullets: [
      "Strukturierte Netzwerkverkabelung",
      "Anschlusstechnik & Patchfelder",
      "Messprotokoll & Dokumentation",
      "Glasfaser & Kupfer",
    ],
  },
  {
    number: "05",
    title: "Kabel- & Satellitenanlagen",
    description:
      "Empfangsanlagen f\u00fcr Kabel und Satellit \u2013 fachgerecht installiert und eingemessen.",
    bullets: [
      "SAT-Anlagen & Multischalter",
      "Kabelanschluss & Verst\u00e4rker",
      "Multimediadosen",
      "Signal-Messtechnik",
    ],
  },
  {
    number: "06",
    title: "Kernbohrungen",
    description:
      "Pr\u00e4zise Kernbohrungen bis 250\u202fmm Durchmesser in Mauerwerk und Beton.",
    bullets: [
      "Durchmesser bis 250\u202fmm",
      "Mauerwerk & Stahlbeton",
      "Staubfreies Arbeiten m\u00f6glich",
      "Deckendurchbr\u00fcche & Wanddurchf\u00fchrungen",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-[#0f1115]">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp()}>
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              Leistungen
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight"
            {...fadeUp(0.1)}
          >
            Unsere Leistungen
          </motion.h1>
          <motion.p className="text-zinc-400 mt-4 max-w-lg" {...fadeUp(0.2)}>
            Seit 1972 bieten wir das komplette Spektrum der Elektrotechnik
            &ndash; zuverl&auml;ssig, fachgerecht und aus einer Hand.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                className="group rounded-2xl border border-zinc-800/50 bg-[#12141a] p-8 hover:border-amber-500/20 transition-colors duration-300"
                {...fadeUp(i * 0.08)}
              >
                <span className="text-sm font-mono text-amber-500/50 mb-4 block">
                  {service.number}
                </span>
                <h3 className="text-lg font-semibold text-zinc-200 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-zinc-500"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-500/40 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-10 lg:p-14 text-center"
            {...fadeUp()}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-100 mb-4">
              Projekt besprechen?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Kontaktieren Sie uns f&uuml;r eine unverbindliche Beratung. Wir
              finden die passende L&ouml;sung f&uuml;r Ihr Vorhaben.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
            >
              Kontakt aufnehmen
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
