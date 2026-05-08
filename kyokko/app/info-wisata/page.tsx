const wisata = [
  {
    title: "Tiket Masuk",
    weekday: "Rp80.000",
    weekend: "Rp100.000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    desc: "Tiket masuk sudah termasuk welcome drink dan akses fasilitas premium Kyokko Beach.",

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
    weekday: "Rp50.000",
    weekend: "Rp75.000",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",

    desc: "Nikmati pengalaman snorkeling dengan panorama laut yang indah.",

    include: ["Peralatan Snorkeling", "Area Laut Wisata", "Spot Foto Laut"],
  },

  {
    title: "Paddle Board",
    weekday: "Rp40.000",
    weekend: "Rp60.000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

    desc: "Aktivitas paddle board seru bersama teman dan keluarga.",

    include: ["Paddle Board", "Pelampung", "Area Bermain Air"],
  },
];

const penginapan = [
  {
    title: "Standard Room",
    price: "Rp350.000 / malam",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    desc: "Kamar nyaman dengan fasilitas lengkap untuk 2 orang.",
  },

  {
    title: "Deluxe Room",
    price: "Rp550.000 / malam",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

    desc: "Kamar luas dengan suasana modern dan view pantai.",
  },

  {
    title: "Private Villa",
    price: "Rp1.200.000 / malam",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    desc: "Villa private premium dengan suasana tropis eksklusif.",
  },
];

export default function InfoWisataPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-28 py-16 px-6">
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Info Wisata Kyokko Beach 🌊</h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Nikmati berbagai aktivitas wisata dan pilihan penginapan terbaik di
          Kyokko Beach.
        </p>
      </div>

      {/* WISATA */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Aktivitas Wisata 🎟️
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {wisata.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>

                <p className="text-gray-600 mb-5">{item.desc}</p>

                <div className="space-y-3 mb-5">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    Weekday: {item.weekday}
                  </div>

                  <div className="bg-pink-100 p-3 rounded-lg">
                    Weekend: {item.weekend}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Include:</h3>

                  <ul className="space-y-2">
                    {item.include.map((inc, i) => (
                      <li
                        key={i}
                        className="bg-gray-100 p-2 rounded-lg text-sm"
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
      </div>

      {/* PENGINAPAN */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Penginapan 🏨</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {penginapan.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{room.title}</h2>

                <p className="text-gray-600 mb-4">{room.desc}</p>

                <div className="text-blue-500 text-2xl font-bold">
                  {room.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}