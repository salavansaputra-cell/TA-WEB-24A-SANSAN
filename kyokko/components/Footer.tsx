export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>

          <h2 className="text-2xl font-bold mb-3">
            Kyokko Beach 🌊
          </h2>

          <p className="text-gray-400">
            Destinasi wisata modern di Lampung dengan konsep beach club.
          </p>

        </div>

        {/* MENU */}
        <div>

          <h3 className="text-xl font-semibold mb-3">
            Menu
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>Home</li>
            <li>Facilities</li>
            <li>Reservasi</li>

          </ul>

        </div>

      </div>

    </footer>
  );
}