"use client";
import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
// Desa Tematik
import desa1 from "../../public/Assets/images/Desa/Borogojol.png";
import desa_2 from "../../public/Assets/images/Desa/Payung.png";
import desa_3 from "../../public/Assets/images/Desa/Cicenang.png";
import desa_4 from "../../public/Assets/images/Desa/Cisambeng.png";
import desa_5 from "../../public/Assets/images/Desa/Jatisur.png";
import desa_6 from "../../public/Assets/images/Desa/Leuwilaja.png";
import desa_7 from "../../public/Assets/images/Desa/Nanggerang.png";
import desa_8 from "../../public/Assets/images/Desa/Nunuk.png";
import desa_9 from "../../public/Assets/images/Desa/Pasiripis.png";
import desa_10 from "../../public/Assets/images/Desa/Putri Dalem.png";
import desa_11 from "../../public/Assets/images/Desa/Rajagaluh Kidul.png";
import desa_12 from "../../public/Assets/images/Desa/Cimuncang.png";
import { Download } from "lucide-react";
// File
const PDF_FILE_URL = "http://localhost:3000/BOROGOJOL.pdf";
const PDF1_FILE_URL = "http://localhost:3000/CIMUNCANG.pdf";
const PDF2_FILE_URL = "http://localhost:3000/CICENANG.pdf";
const PDF3_FILE_URL = "http://localhost:3000/CISAMBENG.pdf";
const PDF4_FILE_URL = "http://localhost:3000/RAJAGALUH KIDUL.pdf";
const PDF5_FILE_URL = "http://localhost:3000/NUNUK.pdf";
const PDF6_FILE_URL = "http://localhost:3000/NANGGERANG.pdf";
const PDF7_FILE_URL = "http://localhost:3000/PAYUNG.pdf";
const PDF8_FILE_URL = "http://localhost:3000/PASIRIPIS.pdf";
const PDF9_FILE_URL = "http://localhost:3000/PUTRI DALEM.pdf";
const PDF10_FILE_URL = "http://localhost:3000/LEUWILAJA.pdf";
const PDF11_FILE_URL = "http://localhost:3000/JATISURA.pdf";
const Desa = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/*Desa Kreatif*/}
        <div className="profile pt-32 z-50 px-5" id="profile">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-2">
            Desa <span className="font-bold text-sky-400">Tematik</span>
          </h1>
          <p className="text-center">Desa Tematik Kreatif</p>
          <div className="profile-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {/* Profile 1 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Borogojol</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 1 End*/}
            {/* Profile 2 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_2} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Payung</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF7_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 2 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_3} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cicenang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF2_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 4 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_4} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cisambeng</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF3_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 4 End*/}
            {/* Profile 5 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_5} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Jatisura</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF11_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 5 End*/}
            {/* Profile 6 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_6} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Leuwilaja</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF10_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 6 End*/}
            {/* Profile 7 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_7} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Nanggerang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF6_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 7 End*/}
            {/* Profile 8 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_8} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Nunuk Baru</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF5_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 8 End*/}
            {/* Profile 9 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_9} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Pasiripis</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF8_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 9 End*/}
            {/* Profile 10 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_10} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Putri Dalem</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF9_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 10 End*/}
            {/* Profile 11 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_11} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2 ">
                Desa Rajagaluh Kidul
              </h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF4_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 11 End*/}
            {/* Profile 12 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <Image src={desa_12} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cimuncang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <button
                onClick={() => {
                  downloadFileAtURL(PDF1_FILE_URL);
                }}
                type="submit"
                className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                <span className="text-xs">Download File</span>
              </button>
            </div>
            {/* Profile 12 End*/}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Desa;
