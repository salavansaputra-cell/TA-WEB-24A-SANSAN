"use client";

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
  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <h1 className="text-4xl font-bold">
        Dashboard Admin
      </h1>
    </main>
  );
}