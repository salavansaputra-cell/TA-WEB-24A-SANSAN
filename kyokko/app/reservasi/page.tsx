"use client";

import { useState } from "react";

export default function ReservasiPage() {
  const [nama, setNama] = useState("");

  const [nomorHp, setNomorHp] =
    useState("");

  const [checkIn, setCheckIn] =
    useState("");

  const [checkOut, setCheckOut] =
    useState("");

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

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">
            Data Pemesan
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) =>
                setNama(e.target.value)
              }
              className="w-full border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Nomor Telepon"
              value={nomorHp}
              onChange={(e) =>
                setNomorHp(e.target.value)
              }
              className="w-full border rounded-xl p-4"
            />

            <div>
              <label>
                Check In
              </label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) =>
                  setCheckIn(e.target.value)
                }
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div>
              <label>
                Check Out
              </label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) =>
                  setCheckOut(e.target.value)
                }
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

          </div>
        </div>

        {/* DETAIL */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold">
            Detail Reservasi
          </h2>
        </div>

      </div>
    </main>
  );
}