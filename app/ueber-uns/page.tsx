"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
};

const TIMELINE = [
  {
    year: "1972",
    title: "Gründung",
    text: "Ernst Wagner gründet den Elektrobetrieb in Eching bei München und legt den Grundstein für über 50 Jahre Handwerkstradition.",
  },
  {
    year: "1974",
    title: "Umzug",
    text: "Der Betrieb bezieht die Räumlichkeiten in der Erfurter Straße 7 in Eching — bis heute der Firmensitz.",
  },
  {
    year: "1993",
    title: "Meisterbrief Jürgen Wagner",
    text: "Jürgen Wagner legt erfolgreich die Meisterprüfung im Elektrohandwerk ab.",
  },
  {
    year: "1996",
    title: "Übernahme",
    text: "Jürgen Wagner übernimmt die Geschäftsführung und führt den Betrieb als Meisterbetrieb in zweiter Generation weiter.",
  },
  {
    year: "2009",
    title: "Erweiterung",
    text: "Der Betrieb wächst weiter und erweitert sein Leistungsspektrum im Bereich EDV-Netzwerke und gewerbliche Installationen.",
  },
  {
    year: "2015",
    title: "Meisterbrief Sebastian Wagner",
    text: "Sebastian Wagner legt die Meisterprüfung ab und bringt frisches Fachwissen in den Familienbetrieb ein.",
  },
  {
    year: "2021",
    title: "GmbH & Co. KG",
    text: "Umwandlung in die Elektro Wagner GmbH & Co. KG. Sebastian Wagner tritt offiziell in die Geschäftsführung ein — der Betrieb wird in dritter Generation fortgeführt.",
  },
];

const STATS = [
  { value: "25", label: "Mitarbeiter" },
  { value: "2", label: "Meister" },
  { value: "18", label: "Gesellen" },
  { value: "5", label: "Auszubildende" },
  { value: "50+", label: "Jahre Erfahrung" },
  { value: "1972", label: "Gegründet" },
];

const TEAM = [
  {
    name: "Jürgen Wagner",
    role: "Geschäftsführer & Elektrotechnikermeister",
    since: "Meister seit 1993 · Geschäftsführer seit 1996",
    description:
      "Als Elektrotechnikermeister und Geschäftsführer in zweiter Generation leitet Jürgen Wagner den Betrieb seit über 25 Jahren. Persönliche Beratung und höchste Qualitätsansprüche stehen für ihn an erster Stelle.",
  },
  {
    name: "Sebastian Wagner",
    role: "Geschäftsführer & Elektrotechnikermeister",
    since: "Meister seit 2015 · Geschäftsführer seit 2021",
    description:
      "Sebastian Wagner vertritt die dritte Generation im Familienbetrieb. Mit seinem Meisterbrief und modernem Fachwissen sorgt er dafür, dass der Betrieb auch in Zukunft auf dem neuesten Stand der Technik bleibt.",
  },
];

export default function UeberUns() {
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
              Über uns
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Familienbetrieb seit <span className="text-red-500">1972</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Drei Generationen Handwerkskunst. Vom Ein-Mann-Betrieb zum
              Innungs-Meisterbetrieb mit 25 Mitarbeitern — und immer noch persönlich für Sie da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 lg:py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <svg
              className="w-10 h-10 text-white/30 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">
              Unsere Kunden sind Meistersache.
            </blockquote>
            <p className="text-white/70 text-base lg:text-lg max-w-xl mx-auto">
              Wenn es um Beratung, Anfragen und Angebote geht, kümmern wir uns persönlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 px-4 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-14 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
              Unser Team in Zahlen
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/[0.04] text-center"
              >
                <span className="text-3xl lg:text-4xl font-bold text-red-500 block">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-500 mt-1 block uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 px-4 bg-[#0f0f0f] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-14 text-center">
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-red-500/10 text-red-500 mb-5">
              Geschäftsführung
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
              Ihre Ansprechpartner
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                className="p-8 lg:p-10 rounded-2xl bg-[#0f0f0f] border border-white/[0.04]"
              >
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-5">
                  <span className="text-xl font-bold text-red-500">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-red-500 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-xs text-zinc-500 mb-4">{member.since}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="mb-14 text-center">
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-red-500/10 text-red-500 mb-5">
              Geschichte
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
              Über 50 Jahre Handwerk
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: i * 0.08 }}
                  className="relative flex gap-6 lg:gap-8"
                >
                  {/* Dot */}
                  <div className="relative z-10 w-12 lg:w-16 shrink-0 flex items-start justify-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-white" />
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <span className="text-sm font-bold text-red-500">{item.year}</span>
                    <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 bg-[#0f0f0f] border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Lernen Sie uns kennen
            </h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Besuchen Sie uns in Eching oder rufen Sie einfach an — wir freuen uns auf Ihr Projekt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-primary text-red-500-foreground font-semibold rounded-full hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Kontakt aufnehmen
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
