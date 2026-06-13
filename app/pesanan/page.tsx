"use client";

import { useState } from "react";

type Reservasi = {
  nama: string;
  tanggal: string;
  orang: string;
  tiket: string;
  penginapan: string;
};

export default function AdminPage() {
  const [data, setData] = useState<Reservasi[]>([]);

  return (
    <div>
      Dashboard Admin
    </div>
  );
}