const facilities = [
  {
    title: "Bean Bag Area",
    desc: "Area santai dengan bean bag nyaman.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  {
    title: "Gazebo & Saung",
    desc: "Gazebo gratis tersedia untuk bersantai.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  },

  {
    title: "Welcome Drink",
    desc: "Setiap tiket masuk mendapatkan minuman gratis.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },

  {
    title: "Toilet & Kamar Bilas",
    desc: "Toilet dan kamar bilas modern.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  },

  {
    title: "Musholla",
    desc: "Musholla nyaman tersedia untuk pengunjung.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  },

  {
    title: "Beach Club Area",
    desc: "Area beach club aesthetic dan santai.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-28 py-16 px-6">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Facilities Kyokko Beach 🌊
        </h1>

        <p className="text-gray-600">
          Nikmati berbagai fasilitas premium Kyokko Beach.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}