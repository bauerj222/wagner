"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
};

const STATS = [
  { value: "1972", label: "Gegründet" },
  { value: "25", label: "Mitarbeiter" },
  { value: "50+", label: "Jahre Erfahrung" },
  { value: "2", label: "Meister" },
];

const SERVICES = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Elektroinstallationen",
    description: "Komplette Elektroinstallationen für Wohnbau, Sanierung und Neubau — fachgerecht und zuverlässig.",
  },
  {
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    title: "EDV-Netzwerke",
    description: "Professionelle Kabelverlegung für EDV-Netze inkl. Anschlusstechnik und Messprotokoll.",
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Kundendienst",
    description: "Schneller Service, Wartung und technische Unterstützung — wir sind für Sie da.",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Gewerbe & Industrie",
    description: "Elektroarbeiten für Betriebsgebäude, Bestandsgebäude und Neubauprojekte jeder Größe.",
  },
  {
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
    title: "Kabel- & Sat-Anlagen",
    description: "Installation und Einrichtung von Kabel- und Satellitensystemen für besten Empfang.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Kernbohrungen",
    description: "Präzise Bohrungen in Ziegel und Beton bis 250mm Durchmesser.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 w-full pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] as const }}
            >
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary mb-6">
                Seit 1972 in Eching
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                Ihr Elektriker{" "}
                <span className="text-primary">aus Eching</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
                Innungs-Meisterbetrieb mit über 50 Jahren Erfahrung.
                25 Mitarbeiter für Elektroinstallationen im Großraum München.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center shadow-lg shadow-primary/20"
                >
                  Kontakt aufnehmen
                </Link>
                <a
                  href="tel:08931926484"
                  className="px-8 py-4 border border-foreground/15 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-all duration-300 text-center"
                >
                  (089) 319 26 84
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] as const }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="p-6 lg:p-8 rounded-2xl bg-white border border-border shadow-sm text-center"
                  >
                    <span className="text-3xl lg:text-4xl font-bold text-primary block">{stat.value}</span>
                    <span className="text-xs text-muted-foreground mt-1 block uppercase tracking-wider font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary mb-5">
              Leistungen
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
              Was wir für Sie tun
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base lg:text-lg">
              Von der kleinen Reparatur bis zur kompletten Elektroinstallation — alles aus einer Hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <motion.div key={service.title} {...fadeIn} transition={{ ...fadeIn.transition, delay: i * 0.08 }}>
                <div className="group p-6 lg:p-8 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-12 text-center">
            <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-700 transition-colors">
              Alle Leistungen im Detail
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 lg:py-32 px-4 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary mb-5">
                Über uns
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
                Familienbetrieb in 3. Generation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                1972 von Ernst Wagner gegründet, wird das Unternehmen heute von Jürgen und Sebastian Wagner
                als Meisterbetrieb geführt. Mit 25 Mitarbeitern — darunter 2 Meister, 18 Gesellen und
                5 Auszubildende — sind wir Ihr kompetenter Partner für alle Elektroarbeiten im Großraum München.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                &bdquo;Unsere Kunden sind Meistersache. Wenn es um Beratung, Anfragen und Angebote geht,
                kümmern wir uns persönlich.&ldquo;
              </p>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/15 text-foreground text-sm font-medium rounded-full hover:bg-foreground/5 transition-all duration-300"
              >
                Mehr erfahren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
              <div className="space-y-4">
                {[
                  { year: "1972", text: "Gründung durch Ernst Wagner in Eching" },
                  { year: "1996", text: "Übernahme durch Jürgen Wagner (Meister)" },
                  { year: "2015", text: "Sebastian Wagner wird Meister" },
                  { year: "2021", text: "Umwandlung in GmbH & Co. KG" },
                ].map((item, i) => (
                  <motion.div
                    key={item.year}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 items-start p-4 rounded-xl bg-white border border-border"
                  >
                    <span className="text-2xl font-bold text-primary shrink-0">{item.year}</span>
                    <span className="text-sm text-muted-foreground pt-1">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-5">
              Projekt besprechen?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Ob Neubau, Sanierung oder Reparatur — wir beraten Sie persönlich und erstellen Ihnen ein unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <a
                href="tel:08931926484"
                className="px-8 py-4 border border-foreground/15 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-all duration-300"
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
