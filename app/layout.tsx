import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Elektro Wagner — Meisterbetrieb seit 1972",
    template: "%s | Elektro Wagner",
  },
  description:
    "Innungs-Meisterbetrieb für Elektroinstallationen in Eching bei München. Über 50 Jahre Erfahrung, 25 Mitarbeiter.",
  openGraph: {
    title: "Elektro Wagner GmbH & Co. KG",
    description: "Innungs-Meisterbetrieb seit 1972 — Elektroinstallationen in Eching bei München",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Elektro Wagner GmbH & Co. KG",
  telephone: "+4989319268",
  email: "mail@wagner-eching.de",
  address: { "@type": "PostalAddress", streetAddress: "Erfurter Straße 7", addressLocality: "Eching", postalCode: "85386", addressCountry: "DE" },
  foundingDate: "1972",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="grain">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
