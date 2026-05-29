// COMMIT 6
// git commit -m "memperhalus tampilan card dan section home"

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/pantai.jpg')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* content */}
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <p className="uppercase tracking-[5px] text-sm mb-4 text-blue-200">
            Welcome to
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Kyokko Beach 🌊
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Destinasi beach club modern di Lampung dengan suasana tropis, sunset
            aesthetic, fasilitas premium, dan pengalaman liburan terbaik.
          </p>

          <Link
            href="/reservasi"
            className="
              bg-blue-500
              hover:bg-blue-600
              px-7
              py-3
              rounded-xl
              transition
              duration-300
              inline-block
            "
          >
            Reservasi Sekarang
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Tentang Kyokko Beach</h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Kyokko Beach merupakan destinasi wisata modern di Teluk Pandan,
            Pesawaran, Lampung yang menghadirkan konsep beach club dengan
            suasana nyaman, aesthetic, dan cocok untuk bersantai bersama
            keluarga maupun teman.
          </p>
        </div>
      </section>

      {/* INFO CARD */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div
            className="
              bg-white
              rounded-2xl
              shadow-sm
              p-8
              text-center
              hover:shadow-lg
              transition
            "
          >
            <div className="text-4xl mb-4">📍</div>

            <h3 className="text-xl font-semibold mb-3">Lokasi</h3>

            <p className="text-gray-600">
              Kyokko Beach, Teluk Pandan, Pesawaran, Lampung
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-2xl
              shadow-sm
              p-8
              text-center
              hover:shadow-lg
              transition
            "
          >
            <div className="text-4xl mb-4">💰</div>

            <h3 className="text-xl font-semibold mb-3">Tiket Masuk</h3>

            <p className="text-gray-600">Weekday Rp80.000</p>

            <p className="text-gray-600">Weekend Rp100.000</p>
          </div>

          <div
            className="
              bg-white
              rounded-2xl
              shadow-sm
              p-8
              text-center
              hover:shadow-lg
              transition
            "
          >
            <div className="text-4xl mb-4">🌅</div>

            <h3 className="text-xl font-semibold mb-3">Daya Tarik</h3>

            <p className="text-gray-600 leading-relaxed">
              Sunset aesthetic, snorkeling, beach lounge, dan penginapan nyaman.
            </p>
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Fasilitas Unggulan</h2>

          <p className="text-gray-600">
            Nikmati fasilitas premium untuk kenyamanan liburanmu.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Bean Bag Area",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            },

            {
              title: "Gazebo Santai",
              img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
            },

            {
              title: "Welcome Drink",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-56
                  object-cover
                "
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Lokasi Kami</h2>

          <p className="text-gray-600">
            Temukan lokasi Kyokko Beach dengan mudah.
          </p>
        </div>

        <div
          className="
            max-w-6xl
            mx-auto
            rounded-3xl
            overflow-hidden
            shadow-lg
          "
        >
          <iframe
            src="https://www.google.com/maps?q=Kyokko+Beach+Lampung&output=embed"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
