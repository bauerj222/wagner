"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease },
});

const hours = [
  { day: "Montag \u2013 Donnerstag", time: "07:00 \u2013 16:30 Uhr" },
  { day: "Freitag", time: "07:00 \u2013 12:00 Uhr" },
  { day: "Samstag & Sonntag", time: "Geschlossen" },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#0f1115]">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp()}>
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              Kontakt
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight"
            {...fadeUp(0.1)}
          >
            Sprechen Sie uns an
          </motion.h1>
          <motion.p className="text-zinc-400 mt-4 max-w-lg" {...fadeUp(0.2)}>
            Wir beraten Sie gerne pers&ouml;nlich &ndash; telefonisch, per
            E-Mail oder direkt vor Ort in Eching.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards + Hours */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Address */}
            <motion.div
              className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-6"
              {...fadeUp(0)}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1">Adresse</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Erfurter Stra&szlig;e 7<br />
                85386 Eching
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-6"
              {...fadeUp(0.08)}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1">Telefon</h3>
              <p className="text-sm text-zinc-400">
                <a href="tel:+498931926984" className="hover:text-amber-500 transition-colors">
                  (089) 319 26 84
                </a>
              </p>
            </motion.div>

            {/* Fax */}
            <motion.div
              className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-6"
              {...fadeUp(0.16)}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 9H5.25" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1">Fax</h3>
              <p className="text-sm text-zinc-400">(089) 319 66 51</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-6"
              {...fadeUp(0.24)}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1">E-Mail</h3>
              <p className="text-sm text-zinc-400">
                <a href="mailto:mail@wagner-eching.de" className="hover:text-amber-500 transition-colors">
                  mail@wagner-eching.de
                </a>
              </p>
            </motion.div>
          </div>

          {/* Opening Hours */}
          <motion.div
            className="rounded-2xl border border-zinc-800/50 bg-[#12141a] p-8 lg:p-10 max-w-md"
            {...fadeUp(0.1)}
          >
            <h3 className="text-lg font-semibold text-zinc-200 mb-6">
              &Ouml;ffnungszeiten
            </h3>
            <table className="w-full">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className="border-b border-zinc-800/30 last:border-0">
                    <td className="py-3 text-sm text-zinc-400">{row.day}</td>
                    <td className="py-3 text-sm text-zinc-200 text-right font-medium">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp()}>
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              Nachricht
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight mb-12"
            {...fadeUp(0.1)}
          >
            Schreiben Sie uns
          </motion.h2>

          <motion.form
            className="max-w-2xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
            {...fadeUp(0.2)}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#12141a] border border-zinc-800/50 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">E-Mail</label>
                <input
                  type="email"
                  placeholder="ihre@email.de"
                  className="w-full px-4 py-3 rounded-lg bg-[#12141a] border border-zinc-800/50 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Telefon <span className="text-zinc-600">(optional)</span></label>
              <input
                type="tel"
                placeholder="Ihre Telefonnummer"
                className="w-full px-4 py-3 rounded-lg bg-[#12141a] border border-zinc-800/50 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Nachricht</label>
              <textarea
                rows={5}
                placeholder="Beschreiben Sie Ihr Anliegen..."
                className="w-full px-4 py-3 rounded-lg bg-[#12141a] border border-zinc-800/50 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-amber-500/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
            >
              Nachricht senden
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
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
