import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function Datenschutz() {
  return (
    <main className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-12">
          Datenschutz&shy;erkl&auml;rung
        </h1>
        <div className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-0">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base font-semibold text-foreground">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
              sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            </p>
            <h3 className="text-base font-semibold text-foreground">Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur verantwortlichen Stelle&ldquo;
              in dieser Datenschutzerkl&auml;rung entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
              und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Verantwortliche Stelle</h2>
            <p>
              Elektro Wagner GmbH &amp; Co. KG<br />
              Erfurter Stra&szlig;e 7<br />
              85386 Eching<br />
              Telefon: (089) 319 26 84<br />
              E-Mail: mail@wagner-eching.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Dauer der Speicherung</h2>
            <p>
              Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer
              genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r
              die Datenverarbeitung entf&auml;llt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Allgemeine Hinweise zu den Rechtsgrundlagen</h2>
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw.
              Art. 9 Abs. 2 lit. a DSGVO. Im Falle einer ausdr&uuml;cklichen Einwilligung in die
              &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
              au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>die L&ouml;schung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>die Einschr&auml;nkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>die Daten&uuml;bertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
              <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Server-Log-Dateien</h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten
              werden nicht mit anderen Datenquellen zusammengef&uuml;hrt. Grundlage ist Art. 6
              Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter. Grundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
