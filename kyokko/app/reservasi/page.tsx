"use client";

import { useState } from "react";

export default function ReservasiPage() {
  const [nama, setNama] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Reservasi Kyokko Beach 🌊
        </h1>

        <p className="text-gray-600 mt-2">
          Lengkapi data pemesanan Anda
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold">
            Data Pemesan
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold">
            Detail Reservasi
          </h2>
        </div>

      </div>
    </main>
  );
}