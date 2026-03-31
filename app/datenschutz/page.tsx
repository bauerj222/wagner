import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Elektro Wagner",
  description: "Datenschutzerkl\u00e4rung der Elektro Wagner GmbH & Co. KG, Eching.",
};

export default function DatenschutzPage() {
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
            Datenschutzerkl&auml;rung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-2xl space-y-12">
            {/* 1. Overview */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Allgemeine Hinweise
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie diese Website besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text
                aufgef&uuml;hrten Datenschutzerkl&auml;rung.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                <strong className="text-zinc-300">
                  Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                  Website?
                </strong>
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
                Abschnitt &bdquo;Hinweis zur verantwortlichen Stelle&ldquo; in
                dieser Datenschutzerkl&auml;rung entnehmen.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                <strong className="text-zinc-300">
                  Wie erfassen wir Ihre Daten?
                </strong>
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln,
                die Sie in ein Kontaktformular eingeben. Andere Daten werden
                automatisch oder nach Ihrer Einwilligung beim Besuch der
                Website durch unsere IT-Systeme erfasst. Das sind vor allem
                technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
                oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
                erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                <strong className="text-zinc-300">
                  Wof&uuml;r nutzen wir Ihre Daten?
                </strong>
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
                k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet
                werden.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                <strong className="text-zinc-300">
                  Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
                </strong>
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
                Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
                ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
                f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
                Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Des Weiteren steht Ihnen ein Beschwerderecht bei der
                zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
              </p>
            </div>

            {/* 2. Hosting */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                2. Hosting
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters
                gespeichert. Hierbei kann es sich v.&nbsp;a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                sonstige Daten, die &uuml;ber eine Website generiert werden,
                handeln. Der Einsatz des Hosters erfolgt im Interesse einer
                sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter
                (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
              </p>
            </div>

            {/* 3. General Notes */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Datenschutz
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerkl&auml;rung. Wenn Sie diese Website benutzen,
                werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie
                pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
                vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche
                Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
                erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <div className="text-sm text-zinc-400 leading-relaxed space-y-1">
                <p>
                  Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                  dieser Website ist:
                </p>
                <p className="mt-3 font-medium text-zinc-300">
                  Elektro Wagner GmbH &amp; Co. KG
                </p>
                <p>Erfurter Stra&szlig;e 7</p>
                <p>85386 Eching</p>
                <p className="mt-2">Telefon: (089) 319 26 84</p>
                <p>E-Mail: mail@wagner-eching.de</p>
                <p className="mt-3">
                  Verantwortliche Stelle ist die nat&uuml;rliche oder
                  juristische Person, die allein oder gemeinsam mit anderen
                  &uuml;ber die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen
                  o.&nbsp;&Auml;.) entscheidet.
                </p>
              </div>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Speicherdauer
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
                speziellere Speicherdauer genannt wurde, verbleiben Ihre
                personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
                Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
                L&ouml;schersuchen geltend machen oder eine Einwilligung zur
                Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
                sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
                f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben;
                in letzterem Fall erfolgt die L&ouml;schung nach Fortfall
                dieser Gr&uuml;nde.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
                ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Recht auf Daten&uuml;bertragbarkeit
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erf&uuml;llung eines Vertrags
                automatisiert verarbeiten, an sich oder an einen Dritten in
                einem g&auml;ngigen, maschinenlesbaren Format
                aush&auml;ndigen zu lassen. Sofern Sie die direkte
                &Uuml;bertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Auskunft, L&ouml;schung und Berichtigung
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empf&auml;nger und den Zweck der Datenverarbeitung und ggf.
                ein Recht auf Berichtigung oder L&ouml;schung dieser Daten.
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Recht auf Einschr&auml;nkung der Verarbeitung
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung
                Ihrer personenbezogenen Daten zu verlangen. Hierzu
                k&ouml;nnen Sie sich jederzeit an uns wenden.
              </p>
            </div>

            {/* 4. Data Collection */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4">
                4. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Server-Log-Dateien
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns &uuml;bermittelt. Dies sind:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  Browsertyp und Browserversion
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  verwendetes Betriebssystem
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  Referrer URL
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  Hostname des zugreifenden Rechners
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  Uhrzeit der Serveranfrage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                  IP-Adresse
                </li>
              </ul>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                Eine Zusammenf&uuml;hrung dieser Daten mit anderen
                Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der
                Optimierung seiner Website &ndash; hierzu m&uuml;ssen die
                Server-Log-Dateien erfasst werden.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Kontaktformular
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre
                Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
                Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO,
                sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags
                zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an
                uns gerichteten Anfragen (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
                DSGVO) oder auf Ihrer Einwilligung (Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;a DSGVO), sofern diese abgefragt wurde. Die von
                Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
                uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck
                f&uuml;r die Datenspeicherung entf&auml;llt. Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
              </p>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2 mt-6">
                Anfrage per E-Mail oder Telefon
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
                Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und
                verarbeitet. Diese Daten geben wir nicht ohne Ihre
                Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
                Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO,
                sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags
                zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf Ihrer
                Einwilligung und/oder auf unseren berechtigten Interessen
                (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
              </p>
            </div>

            {/* Source Note */}
            <div className="pt-8 border-t border-zinc-800/30">
              <p className="text-xs text-zinc-600">
                Quelle: angepasst auf Basis von{" "}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-amber-500/70 transition-colors"
                >
                  e-recht24.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
