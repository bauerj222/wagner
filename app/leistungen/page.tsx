"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
};

const SERVICES = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Elektroinstallationen",
    subtitle: "Wohnbau, Sanierung & Neubau",
    description:
      "Komplette Elektroinstallationen für Wohngebäude — ob Neubau, Altbausanierung oder Renovierung. Wir planen und installieren Ihre gesamte Elektrik nach aktuellen Normen und Vorschriften. Von der Unterverteilung bis zur letzten Steckdose erhalten Sie alles aus einer Hand.",
    details: [
      "Planung und Installation kompletter Hauselektrik",
      "Altbausanierung und Nachrüstung",
      "Schalter- und Steckdosenprogramme aller Hersteller",
      "Sicherungstechnik und Schutzmaßnahmen",
      "Beleuchtungsplanung und -installation",
    ],
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Betriebs-, Alt- und Neubauten",
    subtitle: "Gewerbe & Industrie jeder Größe",
    description:
      "Elektroarbeiten für gewerbliche und industrielle Gebäude. Ob Bestandsgebäude, Umbau oder kompletter Neubau — wir übernehmen Projekte jeder Größenordnung und sorgen für zuverlässige, normgerechte Elektroinstallationen in Ihrem Betrieb.",
    details: [
      "Elektroinstallation für Gewerbe und Industrie",
      "Bestandssanierung und Erweiterungen",
      "Neubauprojekte aller Größenordnungen",
      "Energieverteilung und Schaltanlagen",
      "Sicherheitsbeleuchtung und Notstromanlagen",
    ],
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Kundendienst-Service",
    subtitle: "Wartung & technische Unterstützung",
    description:
      "Schneller und zuverlässiger Kundendienst für alle elektrischen Anlagen. Ob Störungsbeseitigung, regelmäßige Wartung oder technische Beratung — unser Service-Team ist für Sie da und sorgt dafür, dass alles reibungslos funktioniert.",
    details: [
      "Schnelle Störungsbeseitigung",
      "Regelmäßige Wartung und Inspektion",
      "E-Check und Sicherheitsprüfungen",
      "Technische Beratung und Betreuung",
      "Notdienst bei dringenden Problemen",
    ],
  },
  {
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    title: "EDV-Netzwerke",
    subtitle: "Kabelverlegung & Anschlusstechnik",
    description:
      "Professionelle Planung und Installation von EDV-Netzwerken. Von der strukturierten Verkabelung über die Anschlusstechnik bis zum zertifizierten Messprotokoll — wir liefern Ihnen eine leistungsfähige und zukunftssichere Netzwerkinfrastruktur.",
    details: [
      "Strukturierte Kabelverlegung (Cat 6/7)",
      "Patchfelder und Netzwerkschränke",
      "Anschlusstechnik und Dosen",
      "Zertifizierte Messprotokolle",
      "Glasfaser-Installation",
    ],
  },
  {
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
    title: "Kabel- & Satellitenanlagen",
    subtitle: "Installation & Einrichtung",
    description:
      "Fachgerechte Installation und Einrichtung von Kabel- und Satellitenanlagen. Wir sorgen für optimalen Empfang und eine saubere Verlegung — ob Einzelanschluss oder Gemeinschaftsanlage für Mehrfamilienhäuser.",
    details: [
      "Satellitenschüssel-Montage und Ausrichtung",
      "Kabelanschluss und Signalverteilung",
      "Gemeinschaftsanlagen für Mehrfamilienhäuser",
      "Multimediadosen und Anschlusstechnik",
      "Signalmessung und Optimierung",
    ],
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Kernbohrungen",
    subtitle: "Bis 250 mm in Ziegel & Beton",
    description:
      "Präzise Kernbohrungen in Ziegel- und Betonwänden mit Durchmessern bis 250 mm. Ob für Kabelführungen, Lüftungen oder Rohrdurchführungen — wir bohren sauber, staubarm und ohne Beschädigungen an der umliegenden Bausubstanz.",
    details: [
      "Bohrungen bis 250 mm Durchmesser",
      "Ziegelmauerwerk und Stahlbeton",
      "Kabel- und Rohrdurchführungen",
      "Staubarmes Arbeiten",
      "Innen- und Außenbereich",
    ],
  },
];

export default function Leistungen() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 bg-gradient-to-br from-white via-white to-primary-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] as const }}
          >
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-red-500/10 text-red-500 mb-5">
              Unsere Leistungen
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Alles aus <span className="text-red-500">einer Hand</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Von der Planung bis zur Fertigstellung bieten wir Ihnen das komplette Leistungsspektrum
              eines Innungs-Meisterbetriebs. Fachgerecht, termingerecht und zuverlässig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 lg:py-28 px-4 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto space-y-12">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/[0.04] bg-[#0f0f0f] hover:shadow-lg hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  {/* Icon + title */}
                  <div className="lg:w-1/3 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                      <svg
                        className="w-7 h-7 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={service.icon} />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-red-500 font-medium">{service.subtitle}</p>
                  </div>

                  {/* Description + details */}
                  <div className="lg:w-2/3">
                    <p className="text-zinc-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-white">
                          <svg
                            className="w-4 h-4 text-red-500 mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 bg-[#0f0f0f] border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Interesse geweckt?
            </h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Wir beraten Sie gerne persönlich und erstellen Ihnen ein unverbindliches Angebot
              für Ihr Projekt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-primary text-red-500-foreground font-semibold rounded-full hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <a
                href="tel:08931926484"
                className="px-8 py-4 border border-foreground/15 text-white font-medium rounded-full hover:bg-foreground/5 transition-all duration-300"
              >
                (089) 319 26 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
