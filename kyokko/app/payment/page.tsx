"use client";

import { useState } from "react";

type PaymentData = {
  nama: string;
  nomorHp: string;
  checkIn: string;
  checkOut: string;
  jumlahMalam: number;
  total: number;
};

export default function PaymentPage() {
  const [data] = useState<PaymentData | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("paymentData");

      return stored ? JSON.parse(stored) : null;
    }

    return null;
  });

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Data pembayaran tidak ditemukan</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Payment Kyokko Beach 💳</h1>

        <p className="text-gray-600 mt-2">
          Selesaikan pembayaran reservasi Anda
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8"></div>
    </main>
  );
}
