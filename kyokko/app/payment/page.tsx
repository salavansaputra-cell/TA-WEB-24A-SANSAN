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

  return (
    <main>
      <h1>Payment Kyokko Beach</h1>
    </main>
  );
}
