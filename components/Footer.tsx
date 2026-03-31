import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/30">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-[14px] font-medium text-zinc-200">Elektro Wagner</span>
            </div>
            <p className="text-[11px] text-zinc-600 mb-3">GmbH & Co. KG</p>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[200px]">
              Innungs-Meisterbetrieb seit 1972 in Eching bei München.
            </p>
          </div>
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-4">Leistungen</p>
            <div className="space-y-2 text-[13px] text-zinc-500">
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">Elektroinstallation</Link>
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">EDV-Netzwerke</Link>
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">Kundendienst</Link>
              <Link href="/leistungen" className="block hover:text-zinc-300 transition-colors">Kabel & Sat</Link>
            </div>
          </div>
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-4">Kontakt</p>
            <div className="space-y-2 text-[13px] text-zinc-500">
              <p>Erfurter Straße 7</p>
              <p>85386 Eching</p>
              <a href="tel:08931926484" className="block hover:text-zinc-300 transition-colors">(089) 319 26 84</a>
              <a href="mailto:mail@wagner-eching.de" className="block hover:text-zinc-300 transition-colors">mail@wagner-eching.de</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-4">Öffnungszeiten</p>
            <div className="space-y-2 text-[13px] text-zinc-500">
              <p>Mo – Do: 07 – 16:30</p>
              <p>Fr: 07 – 12</p>
              <p>Sa – So: geschlossen</p>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800/30 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-zinc-700">
          <p>&copy; 2026 Elektro Wagner GmbH & Co. KG</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-zinc-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-zinc-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
