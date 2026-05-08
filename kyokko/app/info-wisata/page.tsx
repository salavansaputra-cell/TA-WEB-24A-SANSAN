const wisata = [
  {
    title: "Tiket Masuk",
    weekday: "Rp80.000",
    weekend: "Rp100.000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Tiket masuk sudah termasuk welcome drink dan akses fasilitas premium Kyokko Beach.",
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
    </div>
  );
}