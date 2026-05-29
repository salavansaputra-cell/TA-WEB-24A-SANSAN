const facilities = [
  {
    title: "Bean Bag Area",
    desc: "Area santai dengan bean bag nyaman untuk menikmati suasana pantai.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  {
    title: "Gazebo & Saung",
    desc: "Gazebo gratis tersedia untuk bersantai bersama keluarga dan teman.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  },

  {
    title: "Welcome Drink",
    desc: "Setiap tiket masuk mendapatkan satu minuman gratis.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },

  {
    title: "Toilet & Kamar Bilas",
    desc: "Toilet dan kamar bilas modern yang bersih dan nyaman.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  },

  {
    title: "Musholla",
    desc: "Musholla nyaman tersedia untuk pengunjung Kyokko Beach.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  },

  {
    title: "Beach Club Area",
    desc: "Akses area beach club modern dengan suasana aesthetic dan santai.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-28">
      {/* HERO */}
      <section className="text-center px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Facilities Kyokko Beach 🌊
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Nikmati berbagai fasilitas premium yang tersedia di Kyokko Beach untuk
          memberikan pengalaman liburan yang nyaman, santai, dan menyenangkan
          bersama keluarga maupun teman.
        </p>
      </section>

      {/* CARD SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* BADGE */}
                <div className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full mb-4">
                  Included in Ticket
                </div>

                <h2 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}