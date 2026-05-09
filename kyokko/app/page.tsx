export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center px-6 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center text-white max-w-2xl">
          <p className="uppercase tracking-[6px] text-sm text-blue-200 mb-4">
            Welcome to
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kyokko Beach 🌊
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Beach club modern dengan suasana tropis, sunset aesthetic, dan
            pengalaman liburan premium di Lampung.
          </p>

          <a
            href="/reservasi"
            className="bg-blue-500 px-7 py-3 rounded-xl font-medium hover:bg-blue-600 transition duration-300 inline-block"
          >
            Reservasi Sekarang
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Tentang Kyokko Beach 🌴
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Kyokko Beach merupakan destinasi wisata modern di Lampung dengan
            konsep beach club yang nyaman dan aesthetic untuk menikmati suasana
            pantai tropis.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Dengan bean bag, gazebo, welcome drink, aktivitas wisata air, dan
            penginapan nyaman, Kyokko Beach menjadi tempat terbaik untuk
            bersantai bersama keluarga maupun teman.
          </p>
        </div>
      </section>
    </main>
  );
}
