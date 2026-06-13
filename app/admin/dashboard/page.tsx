"use client";

import { useState } from "react";

type ReservasiAdmin = {
  nama: string;
  nomorHp: string;
  checkIn: string;
  checkOut: string;
  jumlahMalam: number;
  total: number;
  metodePembayaran: string;
  tanggalPembayaran: string;
  status: string;
};

export default function DashboardAdmin() {
  const [reservasi] = useState<ReservasiAdmin[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return JSON.parse(localStorage.getItem("adminReservasi") || "[]");
  });

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <h1 className="text-4xl font-bold">Dashboard Admin</h1>

      <p className="mt-4">Total Data: {reservasi.length}</p>
    </main>
  );
}
