import type { Metadata } from "next";

export const metadata: Metadata = { title: "Über uns" };

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
