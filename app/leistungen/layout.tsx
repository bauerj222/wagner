import type { Metadata } from "next";

export const metadata: Metadata = { title: "Leistungen" };

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
