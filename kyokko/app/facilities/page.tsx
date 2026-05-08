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
    </div>
  );
}