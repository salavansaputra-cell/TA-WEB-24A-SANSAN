"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Reservasi = {
  nama: string;
  tanggal: string;
  orang: string;
  tiket: string;
  penginapan: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [data, setData] = useState<Reservasi[]>(() => {
    const stored = localStorage.getItem("reservasi");

    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div>
      Dashboard Admin
    </div>
  );
}