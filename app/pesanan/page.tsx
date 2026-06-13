"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ✅ TYPE DATA
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
  return <div>Pesanan Saya</div>;
}
  // ✅ STATE SUDAH ADA TYPE
  const [data, setData] = useState<Reservasi[]>(() => {
    // ✅ cek login admin
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      return [];
    }

    // ✅ ambil data reservasi
    const stored = localStorage.getItem("reservasi");

    let reservasiData: Reservasi[] = [];

    if (stored) {
      try {
        reservasiData = JSON.parse(stored);
      } catch (error) {
        console.error("Error parsing data:", error);
        reservasiData = [];
      }
    }

    return reservasiData;
  });

  useEffect(() => {
    // ✅ cek login admin
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      router.push("/login");
    }
  }, [router]);
  // ✅ DELETE DATA
  const handleDelete = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem("reservasi", JSON.stringify(newData));
  };
  // ✅ TOTAL ORANG (BONUS BIAR KEREN)
  const totalOrang = data.reduce((total, item) => {
    return total + Number(item.orang);
  }, 0); 
}