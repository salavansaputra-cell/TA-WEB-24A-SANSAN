"use client";

type ReservasiItem = {
  name: string;
  price: number;
};

const wisata = [
  {
    title: "Tiket Masuk",
    weekday: 80000,
    weekend: 100000,
    image: "/images/tiket.jpg",

    desc: "Tiket masuk sudah termasuk welcome drink, bean bag, gazebo, kursi santai, toilet, musholla, dan akses beach club.",

    include: [
      "Welcome Drink",
      "Bean Bag",
      "Gazebo",
      "Beach Lounge",
      "Toilet & Kamar Bilas",
    ],
  },

  {
    title: "Snorkeling",
    weekday: 50000,
    weekend: 75000,
    image: "/images/snorkeling.jpeg",

    desc: "Nikmati pengalaman snorkeling dengan panorama bawah laut yang indah.",

    include: ["Peralatan Snorkeling", "Spot Laut", "Pendamping"],
  },

  {
    title: "Paddle Board",
    weekday: 40000,
    weekend: 60000,
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",

    desc: "Aktivitas paddle board seru untuk menikmati suasana pantai.",

    include: ["Paddle Board", "Pelampung", "Area Bermain Air"],
  },
];

const penginapan = [
  {
    title: "Standard Room",
    price: 350000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",

    desc: "Kamar nyaman untuk pasangan atau keluarga kecil.",
  },

  {
    title: "Deluxe Room",
    price: 550000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",

    desc: "Kamar luas dengan desain modern dekat pantai.",
  },

  {
    title: "Private Villa",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",

    desc: "Villa private eksklusif dengan pengalaman menginap mewah.",
  },
];

export default function InfoWisataPage() {
  const addToReservasi = (item: ReservasiItem) => {
    const stored = localStorage.getItem("reservasiCart");

    const reservasi: ReservasiItem[] = stored ? JSON.parse(stored) : [];

    reservasi.push(item);

    localStorage.setItem("reservasiCart", JSON.stringify(reservasi));

    alert(`${item.name} berhasil ditambahkan ke reservasi 🎉`);

    // TIDAK redirect lagi
  };

  return (
    <main className="bg-gray-50 min-h-screen pt-28">
      {/* HERO */}
      <section className="text-center px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Info Wisata Kyokko Beach 🌊
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Nikmati berbagai aktivitas wisata dan penginapan terbaik di Kyokko
          Beach.
        </p>
      </section>

      {/* WISATA */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-8">Aktivitas Wisata 🎟️</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisata.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>

                <p className="text-gray-600 mb-4">{item.desc}</p>

                <div className="mb-4 space-y-2">
                  <div className="bg-blue-100 rounded-lg p-3">
                    Weekday: Rp
                    {item.weekday.toLocaleString("id-ID")}
                  </div>

                  <div className="bg-pink-100 rounded-lg p-3">
                    Weekend: Rp
                    {item.weekend.toLocaleString("id-ID")}
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="font-semibold mb-2">Include:</h3>

                  {item.include.map((inc, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 rounded-lg p-2 mb-2 text-sm"
                    >
                      ✅ {inc}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    addToReservasi({
                      name: item.title,
                      price: item.weekday,
                    })
                  }
                  className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
                >
                  Tambah ke Reservasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PENGINAPAN */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Penginapan 🏨</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {penginapan.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{room.title}</h2>

                <p className="text-gray-600 mb-4">{room.desc}</p>

                <div className="text-2xl font-bold text-blue-500 mb-5">
                  Rp
                  {room.price.toLocaleString("id-ID")} / malam
                </div>

                <button
                  onClick={() =>
                    addToReservasi({
                      name: room.title,
                      price: room.price,
                    })
                  }
                  className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
                >
                  Tambah ke Reservasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}