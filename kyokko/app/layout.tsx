import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyokko Beach",
  description: "Website wisata Kyokko Beach Lampung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
