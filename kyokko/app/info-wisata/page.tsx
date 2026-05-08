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

  {
  title: "Snorkeling",
  weekday: "Rp50.000",
  weekend: "Rp75.000",

  image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",

desc: "Nikmati pengalaman snorkeling dengan panorama laut yang indah.",
include: [
  "Peralatan Snorkeling",
  "Area Laut Wisata",
  {
  title: "Paddle Board",
  weekday: "Rp40.000",
  weekend: "Rp60.000",

  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

desc: "Aktivitas paddle board seru bersama teman dan keluarga.",
include: [
  "Paddle Board",
  "Pelampung",
]
}
]
}


],

  },
];


export default function InfoWisataPage() {
  return (
     <div className="min-h-screen bg-gray-100 pt-28 py-16 px-6">
        <div className="text-center mb-14">
  <h1>Info Wisata Kyokko Beach 🌊</h1>
  <p className="text-gray-600 max-w-3xl mx-auto">
  Nikmati berbagai aktivitas wisata dan pilihan penginapan terbaik di
  Kyokko Beach.
</p>
</div>

<div className="mb-20">
    <h2 className="text-3xl font-bold mb-8 text-center">
  Aktivitas Wisata 🎟️
</h2>
</div>

<div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
</div>
    </div>
  );
}