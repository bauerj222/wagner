import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt" };

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
