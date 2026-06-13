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