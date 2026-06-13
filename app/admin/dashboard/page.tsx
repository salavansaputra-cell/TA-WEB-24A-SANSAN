"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [reservasi] = useState<ReservasiAdmin[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return JSON.parse(localStorage.getItem("adminReservasi") || "[]");
  });

  useEffect(() => {
    const login = localStorage.getItem("adminLogin");

    if (login !== "true") {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminLogin");

    router.push("/admin/login");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <h1 className="text-4xl font-bold">Dashboard Admin</h1>

      <button
        onClick={handleLogout}
        className="mt-5 bg-red-500 text-white px-4 py-2 rounded-xl"
      >
        Logout
      </button>

      <p className="mt-4">Total Data: {reservasi.length}</p>
    </main>
  );
}
