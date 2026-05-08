import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">Kyokko Beach 🌊</h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/facilities">Facilities</Link>
          </li>

          <li>
            <Link href="/info-wisata">Info Wisata</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
