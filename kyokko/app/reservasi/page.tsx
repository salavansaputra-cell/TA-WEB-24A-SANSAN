"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  name: string;
  price: number;
};

export default function ReservasiPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("reservasiCart");

      return data ? JSON.parse(data) : [];
    }

    return [];
  });

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

  const isWeekend = checkIn
    ? [0, 6].includes(new Date(checkIn).getDay())
    : false;

  const getPrice = (item: CartItem) => {
    if (item.name === "Tiket Masuk") {
      return isWeekend ? 100000 : 80000;
    }

    if (item.name.includes("Room") || item.name.includes("Villa")) {
      return item.price * jumlahMalam;
    }

    return item.price;
  };

  const total = cart.reduce((total, item) => total + getPrice(item), 0);

  const removeItem = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);

    setCart(updated);

    localStorage.setItem("reservasiCart", JSON.stringify(updated));
  };

  // COMMIT 1
  const handlePayment = () => {
    if (!nama || !nomorHp || !checkIn || !checkOut) {
      alert("Lengkapi semua data terlebih dahulu!");

      return;
    }

    if (cart.length === 0) {
      alert("Belum ada item reservasi!");

      return;
    }

    router.push("/payment");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Reservasi Kyokko Beach 🌊</h1>

        <p className="text-gray-600 mt-2">Lengkapi data pemesanan Anda</p>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
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
              <label className="font-medium">Check In</label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div>
              <label className="font-medium">Check Out</label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div className="bg-blue-100 rounded-xl p-4 text-blue-700 font-medium">
              Lama Menginap: {jumlahMalam} malam
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Detail Reservasi</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Belum ada item reservasi</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-4 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>

                    <p className="text-gray-600">
                      Rp
                      {getPrice(item).toLocaleString("id-ID")}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                  >
                    Hapus
                  </button>
                </div>
              ))}

              <div className="border-t pt-5 flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span className="text-blue-600">
                  Rp
                  {total.toLocaleString("id-ID")}
                </span>
              </div>

              {/* COMMIT 1 */}
              <button
                onClick={handlePayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold transition mt-5"
              >
                Reservasi & Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
