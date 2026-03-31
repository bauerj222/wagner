"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const timeline = [
  {
    year: "1972",
    title: "Gr\u00fcndung",
    text: "Ernst Wagner gr\u00fcndet den Elektrobetrieb in der Wielandstra\u00dfe\u202f2, Eching.",
  },
  {
    year: "1974",
    title: "Neuer Standort",
    text: "Umzug in die Erfurter Stra\u00dfe\u202f7 mit ca.\u202f400\u202fm\u00b2 Lagerfl\u00e4che.",
  },
  {
    year: "1993",
    title: "Meisterpr\u00fcfung",
    text: "J\u00fcrgen Wagner legt die Meisterpr\u00fcfung im Elektrohandwerk ab.",
  },
  {
    year: "1996",
    title: "\u00dcbernahme",
    text: "J\u00fcrgen Wagner \u00fcbernimmt den Betrieb von seinem Vater Ernst Wagner.",
  },
  {
    year: "2009",
    title: "N\u00e4chste Generation",
    text: "Sebastian Wagner beginnt seine Ausbildung als Elektro-Installateur im Familienbetrieb.",
  },
  {
    year: "2015",
    title: "Meisterpr\u00fcfung",
    text: "Sebastian Wagner besteht die Meisterpr\u00fcfung und wird zweiter Meister im Betrieb.",
  },
  {
    year: "2021",
    title: "GmbH & Co. KG",
    text: "Umwandlung in die Elektro Wagner GmbH\u202f&\u202fCo.\u202fKG \u2013 Sebastian Wagner wird Gesch\u00e4ftsf\u00fchrer.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Jahre Erfahrung" },
  { value: 25, suffix: "", label: "Mitarbeiter" },
  { value: 2, suffix: "", label: "Meister" },
  { value: 5, suffix: "", label: "Auszubildende" },
];

const team = [
  {
    name: "J\u00fcrgen Wagner",
    role: "Gesch\u00e4ftsf\u00fchrer & Elektromeister",
    desc: "Meister seit 1993, \u00fcbernahm den Betrieb 1996 von Gr\u00fcnder Ernst Wagner. \u00dcber 30\u202fJahre Erfahrung in allen Bereichen der Elektrotechnik.",
  },
  {
    name: "Sebastian Wagner",
    role: "Gesch\u00e4ftsf\u00fchrer & Elektromeister",
    desc: "Meister seit 2015, Gesch\u00e4ftsf\u00fchrer seit 2021. F\u00fchrt den Familienbetrieb in dritter Generation in die Zukunft.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-[#0f1115]">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp()}>
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              &Uuml;ber uns
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight"
            {...fadeUp(0.1)}
          >
            Seit 1972 in Eching
          </motion.h1>
          <motion.p className="text-zinc-400 mt-4 max-w-lg" {...fadeUp(0.2)}>
            Drei Generationen Elektrohandwerk &ndash; vom Ein-Mann-Betrieb zum
            25-k&ouml;pfigen Team. Familienbetrieb mit Meisterqualit&auml;t.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-8 text-center"
                {...fadeUp(i * 0.08)}
              >
                <div className="text-4xl lg:text-5xl font-bold text-zinc-100 mb-2">
                  <NumberTicker value={stat.value} />
                  {stat.suffix && (
                    <span className="text-amber-500">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp()}>
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              Gesch&auml;ftsf&uuml;hrung
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight mb-12"
            {...fadeUp(0.1)}
          >
            Zwei Meister, ein Betrieb
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-8 lg:p-10"
                {...fadeUp(i * 0.1)}
              >
                <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                  <span className="text-amber-500 font-bold text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-200 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-amber-500/70 mb-4">{member.role}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp()}>
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              Geschichte
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight mb-14"
            {...fadeUp(0.1)}
          >
            &Uuml;ber 50&nbsp;Jahre Elektrotechnik
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800/50" />

            <div className="space-y-10">
              {timeline.map((event, i) => (
                <motion.div
                  key={event.year}
                  className="relative pl-10"
                  {...fadeUp(i * 0.06)}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-amber-500/40 bg-[#0f1115]">
                    <div className="absolute inset-[3px] rounded-full bg-amber-500/60" />
                  </div>
                  <span className="text-xs font-mono text-amber-500/50 block mb-1">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {event.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
