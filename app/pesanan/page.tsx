"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ✅ TYPE DATA
type Reservasi = {
  nama: string;
  tanggal: string;
  orang: string;
  tiket: string;
  penginapan: string;
};

export default function AdminPage() {
  const router = useRouter();

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
}