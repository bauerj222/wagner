import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Elektro Wagner",
  description: "Impressum der Elektro Wagner GmbH & Co. KG, Eching.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0f1115]">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8 border-b border-zinc-800/30">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500/40" />
            <span className="text-[11px] text-amber-500/70 uppercase tracking-[0.3em] font-medium">
              Rechtliches
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-2xl space-y-12">
            {/* Company Info */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Angaben gem&auml;&szlig; &sect;&nbsp;5 TMG
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p className="font-medium text-zinc-300">
                  Elektro Wagner GmbH &amp; Co. KG
                </p>
                <p>Erfurter Stra&szlig;e 7</p>
                <p>85386 Eching</p>
              </div>
            </div>

            {/* Represented by */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Vertreten durch
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p>J&uuml;rgen Wagner, Gesch&auml;ftsf&uuml;hrer</p>
                <p>Sebastian Wagner, Gesch&auml;ftsf&uuml;hrer</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Kontakt
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p>Telefon: (089) 319 26 84</p>
                <p>Telefax: (089) 319 66 51</p>
                <p>E-Mail: mail@wagner-eching.de</p>
              </div>
            </div>

            {/* Trade Register */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Handelsregister
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p>Registergericht: Amtsgericht M&uuml;nchen</p>
                <p>Registernummer: HRA 113457</p>
              </div>
            </div>

            {/* Tax ID */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig;
                &sect;&nbsp;27a Umsatzsteuergesetz: DE 340027235
              </p>
            </div>

            {/* Chamber */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Aufsichtsbeh&ouml;rde / Kammer
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p>Handwerkskammer f&uuml;r M&uuml;nchen und Oberbayern</p>
                <p>Max-Joseph-Stra&szlig;e 4</p>
                <p>80333 M&uuml;nchen</p>
                <p>
                  <a
                    href="https://www.hwk-muenchen.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500/70 hover:text-amber-500 transition-colors"
                  >
                    www.hwk-muenchen.de
                  </a>
                </p>
              </div>
            </div>

            {/* Professional Regulations */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p>Berufsbezeichnung: Elektroinstallateur-Meister</p>
                <p>Zust&auml;ndige Kammer: Handwerkskammer f&uuml;r M&uuml;nchen und Oberbayern</p>
                <p>Verliehen in: Deutschland</p>
                <p>
                  Es gelten die Regelungen der Handwerksordnung (HwO).
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Streitschlichtung
              </h2>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Die Europ&auml;ische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500/70 hover:text-amber-500 transition-colors break-all"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Liability for Content */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Haftung f&uuml;r Inhalte
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Als Diensteanbieter sind wir gem&auml;&szlig; &sect;&nbsp;7
                Abs.&nbsp;1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach
                den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect;&nbsp;8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, &uuml;bermittelte oder gespeicherte fremde
                Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
                forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
                entsprechenden Rechtsverletzungen werden wir diese Inhalte
                umgehend entfernen.
              </p>
            </div>

            {/* Liability for Links */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Haftung f&uuml;r Links
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Unser Angebot enth&auml;lt Links zu externen Websites Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb
                k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine
                Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend
                entfernen.
              </p>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                Urheberrecht
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
                bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur f&uuml;r den privaten, nicht kommerziellen Gebrauch
                gestattet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
