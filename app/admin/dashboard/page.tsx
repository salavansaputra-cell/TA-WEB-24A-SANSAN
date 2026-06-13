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
      {/* HEADER */}
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

      {reservasi.length === 0 ? (
        <div className="bg-white rounded-3xl shadow p-10 text-center text-gray-500 max-w-7xl mx-auto">
          Belum ada data reservasi.
        </div>
      ) : (
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <table className="w-full bg-white rounded-3xl shadow overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-4 text-left">Nama</th>

                <th className="p-4 text-left">Nomor HP</th>

                <th className="p-4 text-left">Check In</th>

                <th className="p-4 text-left">Check Out</th>

                <th className="p-4 text-left">Total</th>

                <th className="p-4 text-left">Pembayaran</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {reservasi.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{item.nama}</td>

                  <td className="p-4">{item.nomorHp}</td>

                  <td className="p-4">{item.checkIn}</td>

                  <td className="p-4">{item.checkOut}</td>

                  <td className="p-4">
                    Rp
                    {item.total.toLocaleString("id-ID")}
                  </td>

                  <td className="p-4 capitalize">{item.metodePembayaran}</td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleHapus(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
