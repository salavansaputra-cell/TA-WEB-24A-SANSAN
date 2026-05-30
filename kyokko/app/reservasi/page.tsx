"use client";

import { useState } from "react";

type CartItem = {
  name: string;
  price: number;
};

export default function ReservasiPage() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("reservasiCart");

      return data ? JSON.parse(data) : [];
    }

    return [];
  });

  const [nama, setNama] = useState("");

  const [nomorHp, setNomorHp] = useState("");

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  // hitung malam
  const jumlahMalam =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 1;

  // total harga
  const total = cart.reduce((total, item) => total + item.price, 0);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Reservasi Kyokko Beach 🌊</h1>

        <p className="text-gray-600 mt-2">Lengkapi data pemesanan Anda</p>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* FORM */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Data Pemesan</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Nomor Telepon"
              value={nomorHp}
              onChange={(e) => setNomorHp(e.target.value)}
              className="w-full border rounded-xl p-4"
            />

            <div>
              <label>Check In</label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div>
              <label>Check Out</label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div className="bg-blue-100 rounded-xl p-4">
              Lama Menginap: {jumlahMalam} malam
            </div>
          </div>
        </div>

        {/* DETAIL */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Detail Reservasi</h2>

          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border rounded-2xl p-4">
                <h3 className="font-semibold">{item.name}</h3>

                <p className="text-gray-600">
                  Rp
                  {item.price.toLocaleString("id-ID")}
                </p>
              </div>
            ))}

            <div className="border-t pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>

              <span>
                Rp
                {total.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
