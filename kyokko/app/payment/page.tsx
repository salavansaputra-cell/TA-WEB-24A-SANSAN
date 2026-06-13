"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type PaymentData = {
  nama: string;
  nomorHp: string;
  checkIn: string;
  checkOut: string;
  jumlahMalam: number;
  total: number;
};

export default function PaymentPage() {
  const router = useRouter();

  const [data] = useState<PaymentData | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("paymentData");

      return stored ? JSON.parse(stored) : null;
    }

    return null;
  });

  const [selectedMethod, setSelectedMethod] = useState("");

  const [buktiTransfer, setBuktiTransfer] = useState<File | null>(null);

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Pilih metode pembayaran terlebih dahulu!");
      return;
    }

    if (!buktiTransfer) {
      alert("Silakan upload bukti pembayaran!");
      return;
    }

    if (!data) return;

    const pesanan = {
      ...data,
      metodePembayaran: selectedMethod,
      status: "Menunggu Verifikasi",
      tanggalPesan: new Date().toLocaleString("id-ID"),
      buktiTransfer: buktiTransfer.name,
    };

    localStorage.setItem("pesanan", JSON.stringify(pesanan));

    localStorage.removeItem("paymentData");

    localStorage.removeItem("reservasiCart");

    router.push("/pesanan");
  };

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Data pembayaran tidak ditemukan</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6 pb-20">
      {/* HEADER */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Payment Kyokko Beach 💳</h1>

        <p className="text-gray-600 mt-2">
          Selesaikan pembayaran reservasi Anda
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* DETAIL PESANAN */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Detail Reservasi</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Nama:</strong> {data.nama}
            </div>

            <div>
              <strong>No. HP:</strong> {data.nomorHp}
            </div>

            <div>
              <strong>Check In:</strong> {data.checkIn}
            </div>

            <div>
              <strong>Check Out:</strong> {data.checkOut}
            </div>

            <div>
              <strong>Lama Menginap:</strong> {data.jumlahMalam} malam
            </div>
          </div>

          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>

              <span className="text-blue-600">
                Rp
                {data.total.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>

        {/* PEMBAYARAN */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Metode Pembayaran</h2>

          <div className="space-y-4">
            <button
              onClick={() => setSelectedMethod("bank")}
              className={`w-full border rounded-2xl p-4 text-left transition ${
                selectedMethod === "bank"
                  ? "border-blue-500 bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
            >
              🏦 Transfer Bank
            </button>

            <button
              onClick={() => setSelectedMethod("qris")}
              className={`w-full border rounded-2xl p-4 text-left transition ${
                selectedMethod === "qris"
                  ? "border-green-500 bg-green-50"
                  : "hover:bg-gray-50"
              }`}
            >
              📱 QRIS
            </button>

            <button
              onClick={() => setSelectedMethod("ewallet")}
              className={`w-full border rounded-2xl p-4 text-left transition ${
                selectedMethod === "ewallet"
                  ? "border-purple-500 bg-purple-50"
                  : "hover:bg-gray-50"
              }`}
            >
              💳 DANA / OVO / GoPay / ShopeePay
            </button>
          </div>

          {/* DETAIL PEMBAYARAN */}

          {selectedMethod === "bank" && (
            <div className="mt-6 bg-blue-50 p-5 rounded-2xl">
              <h3 className="font-bold mb-3">Transfer Bank</h3>

              <p>BCA : 1234567890</p>

              <p>BRI : 9876543210</p>

              <p>Mandiri : 4567891230</p>

              <p className="mt-2 text-sm text-gray-600">a.n Kyokko Beach</p>
            </div>
          )}

          {selectedMethod === "qris" && (
            <div className="mt-6 bg-green-50 p-5 rounded-2xl text-center">
              <h3 className="font-bold mb-4">Scan QRIS</h3>

              <img
                src="/payment/qris.png"
                alt="QRIS"
                className="w-60 mx-auto border rounded-xl"
              />

              <p className="text-sm text-gray-500 mt-3">
                Scan QRIS untuk melakukan pembayaran
              </p>
            </div>
          )}

          {selectedMethod === "ewallet" && (
            <div className="mt-6 bg-purple-50 p-5 rounded-2xl">
              <h3 className="font-bold mb-3">E-Wallet</h3>

              <p>DANA : 08123456789</p>

              <p>OVO : 08123456789</p>

              <p>GoPay : 08123456789</p>

              <p>ShopeePay : 08123456789</p>
            </div>
          )}

          {/* UPLOAD BUKTI */}

          <div className="mt-8">
            <label className="block font-semibold mb-2">
              Upload Bukti Pembayaran
            </label>

            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setBuktiTransfer(e.target.files?.[0] || null)}
              className="w-full border rounded-xl p-3"
            />

            {buktiTransfer && (
              <p className="text-green-600 text-sm mt-2">
                ✓ {buktiTransfer.name}
              </p>
            )}
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold mt-8 transition"
          >
            Saya Sudah Membayar
          </button>
        </div>
      </div>
    </main>
  );
}
