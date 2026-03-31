import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WireDecoration from "@/components/WireDecoration";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Elektro Wagner GmbH & Co. KG — Meisterbetrieb seit 1972",
    template: "%s | Elektro Wagner",
  },
  description:
    "Ihr Innungs-Meisterbetrieb für Elektroinstallationen in Eching bei München. Über 50 Jahre Erfahrung, 25 Mitarbeiter, persönliche Betreuung.",
  keywords: [
    "Elektriker Eching",
    "Elektroinstallation München",
    "Meisterbetrieb Elektro",
    "Elektro Wagner",
    "Elektrotechnik Eching",
    "EDV Netzwerk Installation",
  ],
  openGraph: {
    title: "Elektro Wagner GmbH & Co. KG",
    description: "Innungs-Meisterbetrieb seit 1972 — Elektroinstallationen in Eching bei München",
    url: "https://wagner-elektro.vercel.app",
    siteName: "Elektro Wagner",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Elektro Wagner GmbH & Co. KG",
  description: "Innungs-Meisterbetrieb für Elektroinstallationen seit 1972",
  url: "https://wagner-elektro.vercel.app",
  telephone: "+4989319268",
  email: "mail@wagner-eching.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Erfurter Straße 7",
    addressLocality: "Eching",
    postalCode: "85386",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.3, longitude: 11.62 },
  foundingDate: "1972",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:00", closes: "16:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "12:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <WireDecoration />
        {children}
        <Footer />
      </body>
    </html>
  );
}
