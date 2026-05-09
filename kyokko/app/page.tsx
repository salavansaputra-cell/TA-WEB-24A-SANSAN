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
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
    </main>
  );
}
