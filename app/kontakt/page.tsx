"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const },
};

const CONTACT_INFO = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Adresse",
    value: "Erfurter Straße 7\n85386 Eching",
    href: "https://maps.google.com/?q=Erfurter+Straße+7+85386+Eching",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Telefon",
    value: "(089) 319 26 84",
    href: "tel:08931926484",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    label: "Fax",
    value: "(089) 319 66 51",
    href: null,
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "E-Mail",
    value: "mail@wagner-eching.de",
    href: "mailto:mail@wagner-eching.de",
  },
];

const HOURS = [
  { day: "Montag", time: "07:00 – 16:30" },
  { day: "Dienstag", time: "07:00 – 16:30" },
  { day: "Mittwoch", time: "07:00 – 16:30" },
  { day: "Donnerstag", time: "07:00 – 16:30" },
  { day: "Freitag", time: "07:00 – 12:00" },
  { day: "Samstag", time: "Geschlossen" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function Kontakt() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 bg-gradient-to-br from-white via-white to-primary-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary mb-5">
              Kontakt
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              Sprechen Sie <span className="text-primary">mit uns</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ob Beratung, Angebot oder Serviceanfrage — wir sind persönlich für Sie da.
              Rufen Sie an oder schreiben Sie uns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact info + hours */}
            <div>
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-bold text-foreground mb-8">Kontaktdaten</h2>
                <div className="space-y-6">
                  {CONTACT_INFO.map((item) => {
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                            {item.label}
                          </p>
                          <p className="text-foreground whitespace-pre-line font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block hover:bg-muted/50 rounded-xl p-3 -m-3 transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="p-3 -m-3">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Opening hours */}
              <motion.div {...fadeIn} className="mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Öffnungszeiten</h2>
                <div className="rounded-2xl border border-border overflow-hidden">
                  {HOURS.map((item, i) => {
                    const isClosed = item.time === "Geschlossen";
                    return (
                      <div
                        key={item.day}
                        className={`flex justify-between items-center px-5 py-3.5 ${
                          i < HOURS.length - 1 ? "border-b border-border" : ""
                        } ${isClosed ? "bg-muted/30 text-muted-foreground" : ""}`}
                      >
                        <span className="text-sm font-medium">{item.day}</span>
                        <span className={`text-sm ${isClosed ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                          {item.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right: Contact form */}
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
              <h2 className="text-2xl font-bold text-foreground mb-8">Nachricht senden</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ihr Name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Ihre Telefonnummer"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ihre@email.de"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Worum geht es?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-700 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  Nachricht senden
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
