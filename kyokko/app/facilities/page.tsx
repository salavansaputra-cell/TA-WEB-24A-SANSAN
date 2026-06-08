import Image from "next/image";

const facilities = [
  {
    title: "Bean Bag Area",
    desc: "Area santai dengan bean bag nyaman untuk menikmati suasana pantai dan sunset aesthetic bersama keluarga maupun teman.",
    image: "/images/beanbag.jpeg",
  },

  {
    title: "Gazebo & Saung",
    desc: "Gazebo dan saung tersedia secara gratis untuk bersantai sambil menikmati angin pantai yang sejuk.",
    image: "/images/gazebo.jpg",
  },

  {
    title: "Welcome Drink",
    desc: "Setiap tiket masuk sudah termasuk satu minuman gratis yang dapat ditukarkan di area restoran atau bar.",
    image: "/images/drink.jpeg",
  },

  {
    title: "Toilet & Kamar Bilas",
    desc: "Tersedia toilet bersih dan kamar bilas modern yang nyaman digunakan setelah aktivitas pantai.",
    image: "/images/toilet.jpg",
  },

  {
    title: "Musholla",
    desc: "Musholla nyaman tersedia bagi pengunjung untuk beribadah dengan suasana yang tenang dekat area pantai.",
    image: "/images/mushola.jpeg",
  },

  {
    title: "Beach Lounge",
    desc: "Area beach lounge modern untuk menikmati suasana santai dengan pemandangan laut yang indah.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },

  {
    title: "Spot Foto Instagramable",
    desc: "Area yang dirancang khusus untuk foto-foto menarik dengan pemandangan laut yang indah.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
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
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group
              ${
                index === facilities.length - 1
                  ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full mb-4">
                  Included in Ticket
                </div>

                <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-5">
            Included in Your Ticket ✅
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Tiket masuk Kyokko Beach sudah termasuk akses ke berbagai fasilitas
            premium seperti bean bag, gazebo, beach lounge, musholla, toilet,
            kamar bilas, serta welcome drink tanpa biaya tambahan.
          </p>
        </div>
      </section>
    </main>
  );
}
