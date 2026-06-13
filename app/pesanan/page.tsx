"use client";

import { useState } from "react";
import Link from "next/link";

type Pesanan = {
  nama: string;
  nomorHp: string;
  checkIn: string;
  checkOut: string;
  jumlahMalam: number;
  total: number;
  metodePembayaran: string;
  status: string;
  tanggalPesan: string;
  buktiTransfer: string;
  bookingCode: string;
};

export default function PesananPage() {
  const [pesanan] = useState<Pesanan[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("pesanan");

      return data ? JSON.parse(data) : [];
    }

    return [];
  });

  if (pesanan.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white p-10 rounded-3xl shadow text-center">
          <h2 className="text-3xl font-bold mb-4">Tidak Ada Pesanan</h2>

          <p className="text-gray-600 mb-6">Anda belum memiliki reservasi.</p>

          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            🏠 Kembali ke Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Pesanan Saya</h1>

          <p className="text-gray-600 mt-2">Riwayat reservasi Kyokko Beach</p>
        </div>

        <div className="space-y-8">
          {pesanan.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow overflow-hidden"
            >
              {/* HEADER */}
              <div className="bg-linear-to-r from-blue-500 to-cyan-500 text-white p-8">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold">Pesanan #{index + 1}</h2>

                    <p className="text-blue-100">Booking Code</p>

                    <p className="font-semibold">{item.bookingCode}</p>
                  </div>

                  <div className="text-right">
                    <span className="bg-white/20 px-4 py-2 rounded-full">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* ISI */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-xl mb-4">👤 Data Pemesan</h3>

                    <div className="space-y-3">
                      <p>
                        <strong>Nama:</strong> {item.nama}
                      </p>

                      <p>
                        <strong>Nomor HP:</strong> {item.nomorHp}
                      </p>

                      <p>
                        <strong>Tanggal Pesan:</strong> {item.tanggalPesan}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-4">
                      🌊 Detail Kunjungan
                    </h3>

                    <div className="space-y-3">
                      <p>
                        <strong>Check In:</strong> {item.checkIn}
                      </p>

                      <p>
                        <strong>Check Out:</strong> {item.checkOut}
                      </p>

                      <p>
                        <strong>Lama Menginap:</strong> {item.jumlahMalam} malam
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-8 pt-8">
                  <h3 className="font-bold text-xl mb-4">💳 Pembayaran</h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-gray-500">Metode</p>

                      <p className="font-semibold capitalize">
                        {item.metodePembayaran}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Bukti Transfer</p>

                      <p className="font-semibold text-green-600">
                        ✓ {item.buktiTransfer}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Total</p>

                      <p className="font-bold text-2xl text-blue-600">
                        Rp
                        {item.total.toLocaleString("id-ID")}
                      </p>
               </div>