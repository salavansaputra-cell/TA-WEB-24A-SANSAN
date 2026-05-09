import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";

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
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
