"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">Kyokko Beach 🌊</h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li>
            <Link href="/" className="hover:text-blue-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/facilities" className="hover:text-blue-300 transition">
              Facilities
            </Link>
          </li>

          <li>
            <Link
              href="/info-wisata"
              className="hover:text-blue-300 transition"
            >
              Info Wisata
            </Link>
          </li>

          <li>
            <Link href="/reservasi" className="hover:text-blue-300 transition">
              Reservasi
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/facilities">Facilities</Link>
            </li>

            <li>
              <Link href="/info-wisata">Info Wisata</Link>
            </li>

            <li>
              <Link href="/reservasi">Reservasi</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
