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
    <main className="bg-gray-50 min-h-screen pt-28 py-16 px-6">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Facilities Kyokko Beach 🌊
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Nikmati berbagai fasilitas premium yang sudah tersedia untuk
          kenyamanan liburanmu di Kyokko Beach.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map((item, index) => (
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
              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}