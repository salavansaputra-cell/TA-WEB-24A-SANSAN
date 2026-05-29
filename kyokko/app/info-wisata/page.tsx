const wisata = [
  {
    title: "Tiket Masuk",
    weekday: 80000,
    weekend: 100000,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    desc:
      "Tiket masuk sudah termasuk welcome drink dan akses fasilitas premium Kyokko Beach.",

    include: [
      "Welcome Drink",
      "Bean Bag",
      "Gazebo",
      "Kursi Santai",
      "Toilet & Kamar Bilas",
      "Musholla",
      "Akses Beach Club",
    ],
  },

  {
    title: "Snorkeling",
    weekday: 50000,
    weekend: 75000,
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",

    desc:
      "Nikmati pengalaman snorkeling dengan panorama laut yang indah.",

    include: [
      "Peralatan Snorkeling",
      "Area Laut Wisata",
      "Spot Foto Laut",
    ],
  },

  {
    title: "Paddle Board",
    weekday: 40000,
    weekend: 60000,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

    desc:
      "Aktivitas paddle board seru bersama teman dan keluarga.",

    include: [
      "Paddle Board",
      "Pelampung",
      "Area Bermain Air",
    ],
  },
];

const penginapan = [
  {
    title: "Standard Room",
    price: 350000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    desc:
      "Kamar nyaman dengan fasilitas lengkap untuk 2 orang.",
  },

  {
    title: "Deluxe Room",
    price: 550000,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

    desc:
      "Kamar luas dengan suasana modern dan view pantai.",
  },

  {
    title: "Private Villa",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    desc:
      "Villa private premium dengan suasana tropis eksklusif.",
  },
];

export default function InfoWisataPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-28">
      {/* HERO */}
      <section className="text-center px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Info Wisata Kyokko Beach 🌊
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Nikmati berbagai aktivitas wisata dan penginapan terbaik di
          Kyokko Beach bersama keluarga maupun teman.
        </p>
      </section>

      {/* WISATA */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-8">
          Aktivitas Wisata 🎟️
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisata.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow
                hover:shadow-xl
                transition
                duration-300
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 mb-5">
                  {item.desc}
                </p>

                {/* PRICE */}
                <div className="space-y-3 mb-5">
                  <div className="bg-blue-100 rounded-lg p-3">
                    Weekday: {item.weekday}
                  </div>

                  <div className="bg-pink-100 rounded-lg p-3">
                    Weekend: {item.weekend}
                  </div>
                </div>

                {/* INCLUDE */}
                <div>
                  <h3 className="font-semibold mb-3">
                    Include:
                  </h3>

                  <ul className="space-y-2">
                    {item.include.map((inc, i) => (
                      <li
                        key={i}
                        className="
                          bg-gray-100
                          rounded-lg
                          p-2
                          text-sm
                        "
                      >
                        ✅ {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PENGINAPAN */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">
          Penginapan 🏨
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {penginapan.map((room, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow
                hover:shadow-xl
                transition
                duration-300
              "
            >
              {/* IMAGE */}
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {room.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {room.desc}
                </p>

                <div className="text-2xl font-bold text-blue-500">
                  Rp{room.price.toLocaleString("id-ID")} / malam
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}