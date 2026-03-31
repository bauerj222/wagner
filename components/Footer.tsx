import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-[15px] font-semibold text-white mb-1">Elektro Wagner</p>
            <p className="text-xs text-zinc-600">GmbH & Co. KG</p>
            <p className="text-[13px] text-zinc-500 mt-4 leading-relaxed">
              Innungs-Meisterbetrieb seit 1972. Kompetent, zuverlässig und persönlich.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Leistungen</p>
            <div className="space-y-2.5 text-[13px] text-zinc-600">
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">Elektroinstallationen</Link>
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">EDV-Netzwerke</Link>
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">Kundendienst</Link>
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">Kabel- & Sat-Anlagen</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Kontakt</p>
            <div className="space-y-2.5 text-[13px] text-zinc-600">
              <p>Erfurter Straße 7</p>
              <p>85386 Eching</p>
              <a href="tel:08931926484" className="block hover:text-zinc-300 transition-colors">(089) 319 26 84</a>
              <a href="mailto:mail@wagner-eching.de" className="block hover:text-zinc-300 transition-colors">mail@wagner-eching.de</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Öffnungszeiten</p>
            <div className="space-y-2.5 text-[13px] text-zinc-600">
              <p>Mo – Do: 07:00 – 16:30</p>
              <p>Fr: 07:00 – 12:00</p>
              <p>Sa – So: Geschlossen</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.04] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-zinc-700">&copy; {new Date().getFullYear()} Elektro Wagner GmbH & Co. KG</p>
          <div className="flex gap-5 text-[11px] text-zinc-700">
            <Link href="/impressum" className="hover:text-zinc-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-zinc-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
