export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center px-6 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center text-white max-w-2xl">
          <p className="uppercase tracking-[6px] text-sm text-blue-200 mb-4">
            Welcome to
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kyokko Beach 🌊
          </h1>
        </div>
      </section>
    </main>
  );
}
