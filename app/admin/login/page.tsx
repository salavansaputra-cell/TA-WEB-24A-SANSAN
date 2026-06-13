"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // username & password admin
    if (username === "admin" && password === "kyokko123") {
      localStorage.setItem("adminLogin", "true");

      alert("Login berhasil!");

      router.push("/admin/dashboard");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Login</h1>

          <p className="text-gray-600">Kyokko Beach Reservation System</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="font-medium">Username</label>

            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-xl p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>

            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Demo Login:
          <br />
          Username: <strong>admin</strong>
          <br />
          Password: <strong>kyokko123</strong>
        </div>
      </div>
    </main>
  );
}
