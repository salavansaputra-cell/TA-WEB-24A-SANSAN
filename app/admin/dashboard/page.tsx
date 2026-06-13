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

  const [reservasi, setReservasi] = useState<ReservasiAdmin[]>(() => {
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

  const handleHapus = (index: number) => {
    const updated = reservasi.filter((_, i) => i !== index);

    setReservasi(updated);

    localStorage.setItem("adminReservasi", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Dashboard Admin</h1>

          <p className="text-gray-600 mt-2">Data Reservasi Kyokko Beach</p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
