"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import komiteEkraf from "../../public/Assets/images/komite-ekraf.png";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    signIn("credentials", { username, password, redirect: false }).then(
      async (res) => {
        if (res.error) {
          console.log(res.error);
        } else return (window.location.href = "/Dashboard");
      }
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 w-[90%] max-w-md">
        <div className="mx-auto flex flex-col gap-5 w-full md:w-[350px]">
          <div>
            <Image src={komiteEkraf} alt="mcc" className="w-40 mx-auto mt-5" />
          </div>
          <div className="text-center font-medium text-2xl md:text-4xl text-white">
            Masuk ke MCC
          </div>
          <hr />
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label className="text-white">Masukkan Username / Email : </label>
              <input
                type="text"
                className="bg-slate-200 focus:bg-white p-3 text-sm border outline-0 focus:ring-2 focus:ring-blue-300 focus:ring-inset rounded-lg duration-500 ease-in-out"
                placeholder="Username / Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-white">Masukkan Password : </label>
              <input
                type={showPassword ? "text" : "password"}
                className="bg-slate-200 focus:bg-white p-3 text-sm border outline-0 focus:ring-1 focus:ring-blue-300 focus:ring-inset rounded-lg duration-500 ease-in-out"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="show-password" className="text-white">
                Show Password
              </label>
            </div>
            <button
              type="submit"
              className="bg-purple-800 text-white rounded-lg p-3 hover:bg-purple-600 duration-500 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
