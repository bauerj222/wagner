import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <main className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-12">
          Impressum
        </h1>

        <div className="prose prose-neutral max-w-none space-y-10">
          {/* Company */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p className="font-semibold text-white">
                Elektro Wagner GmbH &amp; Co. KG
              </p>
              <p>Erfurter Straße 7</p>
              <p>85386 Eching</p>
            </div>
          </section>

          {/* Represented by */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Vertreten durch
            </h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p>Jürgen Wagner</p>
              <p>Sebastian Wagner</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p>Telefon: (089) 319 26 84</p>
              <p>Telefax: (089) 319 66 51</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:mail@wagner-eching.de"
                  className="text-primary hover:underline"
                >
                  mail@wagner-eching.de
                </a>
              </p>
            </div>
          </section>

          {/* Trade register */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Handelsregister
            </h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p>Registergericht: Amtsgericht München</p>
              <p>Registernummer: HRA 113457</p>
            </div>
          </section>

          {/* Tax ID */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Umsatzsteuer-ID
            </h2>
            <div className="text-white/40 leading-relaxed">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27a
                Umsatzsteuergesetz: DE 340027235
              </p>
            </div>
          </section>

          {/* Chamber */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Aufsichtsbehörde / Kammer
            </h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p>Handwerkskammer für München und Oberbayern</p>
              <p>Max-Joseph-Straße 4</p>
              <p>80333 München</p>
              <p>
                <a
                  href="https://www.hwk-muenchen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.hwk-muenchen.de
                </a>
              </p>
            </div>
          </section>

          {/* Professional regulations */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p>Berufsbezeichnung: Elektrotechnikermeister</p>
              <p>Zuständige Kammer: Handwerkskammer für München und Oberbayern</p>
              <p>Verliehen in: Deutschland</p>
              <p>
                Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)
              </p>
            </div>
          </section>

          {/* Insurance */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Berufshaftpflichtversicherung
            </h2>
            <div className="text-white/40 leading-relaxed space-y-1">
              <p className="font-semibold text-white">Allianz AG</p>
              <p>Räumlicher Geltungsbereich: EU-weit</p>
              <p className="mt-3">Vermittelt durch:</p>
              <p>Marcus Plattig</p>
              <p>Heidestr. 2</p>
              <p>85386 Eching</p>
            </div>
          </section>

          {/* Dispute resolution */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Streitschlichtung
            </h2>
            <div className="text-white/40 leading-relaxed space-y-3">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
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
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Haftung für Inhalte
            </h2>
            <div className="text-white/40 leading-relaxed space-y-3">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Links liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Haftung für Links
            </h2>
            <div className="text-white/40 leading-relaxed space-y-3">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Urheberrecht
            </h2>
            <div className="text-white/40 leading-relaxed space-y-3">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
