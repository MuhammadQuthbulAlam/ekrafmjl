"use client";
import Image from "next/image";
// Download
const PDF_FILE_URL = "http://localhost:3000/alur_mcc.pdf";
// Fasilitas
import office from "../../public/Assets/images/office.jpeg";
import fashion from "../../public/Assets/images/gallery-fashion.jpeg";
import workshop from "../../public/Assets/images/workshop-office.jpeg";
import art from "../../public/Assets/images/gallery-art.jpeg";
import pameran from "../../public/Assets/images/Ruang-Pameran.jpeg";
import working from "../../public/Assets/images/Co-working-Space1.jpeg";
import working1 from "../../public/Assets/images/Co-working-Space.jpeg";
import pertemuan from "../../public/Assets/images/Ruang-pertemuan.jpeg";
import music from "../../public/Assets/images/gallery-music.jpeg";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Fasilitas = () => {
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
      {/*Fasilitas*/}
      <div className="pt-32" id="fasilitas">
        <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-7">
          Fasilitasi Gedung{" "}
          <span className="font-bold text-sky-400">
            Majalengka Creative Center
          </span>
        </h1>
        <div className="fasilitas-box pt-12 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-6 mx-10">
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={office} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Ruang Kantor
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={fashion} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Gallery Fashion
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={art} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Gallery Lukis
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={working1} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              CO-Working Space
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={pameran} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Ruang Pameran
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={working} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              CO-Working Space
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={pertemuan} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Ruang Pertemuan
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={workshop} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Ruang Workshop
            </h3>
          </div>
          <div className="box p-2 bg-white border-2 rounded-lg">
            <Image src={music} alt="Profile 1" className="rounded-lg" />
            <h3 className="text-xl text-center font-bold mt-6 mb-2">
              Studio Musik
            </h3>
          </div>
        </div>
      </div>

      {/* Alur Pengajuan Gedung MCC */}
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 mx-10">
        <div
          className="pt-10 mt-5 pb-5 bg-white border-2 rounded-lg"
          id="pengajuan"
        >
          <h2 className="text-center lg:text-2xl/tight text-1xl font-medium mb-2">
            Download Alur Pengajuan Gedung MCC Untuk Kegiatan di bawah ini
          </h2>
          <RiDownloadCloud2Line className="text-black flex px-5 text-3xl justify-center z-30" />
          <button
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
            type="submit"
            className="flex px-5 mt-3 mx-auto bg-sky-400 py-1 rounded-sm text-white font-bold hover:bg-sky-500 transition-all"
          >
            Download File
          </button>
        </div>
        {/* Link Pelaku Ekraf */}
        <div
          className="pt-10 mt-5 pb-5 bg-white border-2 rounded-lg"
          id="registrasi"
        >
          <h2 className="text-center lg:text-2xl/tight text-1xl font-medium mb-2">
            Registrasi Pelaku Ekraf Majalengka Di Bawah Ini
          </h2>
          <RiDownloadCloud2Line className="text-black flex px-5 text-3xl justify-center z-30" />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSelUgFVqrPRqGerTgU7n5aXLraDRnkmlrwgw9adufF6T-E_ug/viewform">
            <button
              type="submit"
              className="flex px-5 mt-3 mx-auto bg-sky-400 py-1 rounded-sm text-white font-bold hover:bg-sky-500 transition-all"
            >
              Daftar Sekarang
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Fasilitas;
