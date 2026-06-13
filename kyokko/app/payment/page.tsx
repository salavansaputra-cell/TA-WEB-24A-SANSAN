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
    <main>
      <h1>Payment Kyokko Beach</h1>
    </main>
  );
}
