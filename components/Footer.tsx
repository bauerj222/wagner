import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <span className="text-lg font-bold tracking-tight block mb-1">
              ELEKTRO <span className="text-gradient-red">WAGNER</span>
            </span>
            <span className="text-[9px] text-white/20 font-medium tracking-wider uppercase">GmbH & Co. KG</span>
            <p className="text-sm text-white/30 mt-4 leading-relaxed">
              Innungs-Meisterbetrieb seit 1972. Kompetent, zuverlässig und persönlich.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/20 mb-4">Leistungen</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><Link href="/leistungen" className="hover:text-primary-400 transition-colors">Elektroinstallationen</Link></li>
              <li><Link href="/leistungen" className="hover:text-primary-400 transition-colors">EDV-Netzwerke</Link></li>
              <li><Link href="/leistungen" className="hover:text-primary-400 transition-colors">Kundendienst</Link></li>
              <li><Link href="/leistungen" className="hover:text-primary-400 transition-colors">Kabel- & Sat-Anlagen</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/20 mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>Erfurter Straße 7</li>
              <li>85386 Eching</li>
              <li className="pt-1">
                <a href="tel:08931926484" className="hover:text-primary-400 transition-colors">(089) 319 26 84</a>
              </li>
              <li>
                <a href="mailto:mail@wagner-eching.de" className="hover:text-primary-400 transition-colors">mail@wagner-eching.de</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/20 mb-4">Öffnungszeiten</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>Mo – Do: 07:00 – 16:30</li>
              <li>Fr: 07:00 – 12:00</li>
              <li>Sa – So: Geschlossen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Elektro Wagner GmbH & Co. KG
          </p>
          <div className="flex gap-6 text-xs text-white/20">
            <Link href="/impressum" className="hover:text-white/50 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/50 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
