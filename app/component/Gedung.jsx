"use client";
import Image from "next/image";
import AboutImage from "../../public/Assets/images/MCC3.jpg";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Gedung = () => {
  return (
    <>
      {/*About*/}
      <div
        className="about mx-10 grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-10 pt-5"
        id="about"
      >
        <div className="box mx-10 md:order-1 order-2">
          <Image
            src={AboutImage}
            alt="Aboout Image"
            className="lg:w-[500px] w-[400px] md:m-0 mx-auto rounded-lg"
          />
        </div>
        <div className="pt-20 box md:order-2 order-1">
          <h1 className="lg:text-5xl/tight text-2xl font-medium mb-7">
            Gedung Majalengka
            <span className="font-bold text-sky-400"> Creative Center</span>
          </h1>
          <p className="text-base/loose">
            <span className="font-bold">Gedung Majalengka Creative Center</span>{" "}
            telah berdiri di Kabupaten Majalengka. Bangunan yang ditujukan
            sebagai ruang industri kreatif tersebut diresmikan pada 11 Januari
            2023. Dalam proses peresmian, hadir Menteri Koperasi dan Usaha Kecil
            Menengah Teten Masduki, Wakil Gubernur Jabar Uu Ruzhanul Ulum,
            Bupati Majalengka Karna Sobahi, serta sejumlah tokoh Forkopimda.
            Kegiatan peresmian tersebut juga dihadiri Kepala Dinas Pariwisata
            dan Kebudayaan Provinsi Jawa Barat Benny Bachtiar yang diwakili
            Kepala Bidang Industri Pariwisata Rispiaga. Menurut Menteri Koperasi
            UMKM, keberadaan Gedung Creative Center Majalengka mejadi sebuah
            solusi dari ancaman resesi ekonomi. Masyarakat khususnya generasi
            muda bisa memanfaatkan Gedung Creative Center ini sebagai sarana
            pengembangan industri kreatif serta pemasaran produk-produk lokal.
          </p>
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
          <RiDownloadCloud2Line className=" text-black flex px-5 text-3xl justify-center" />
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
          <RiDownloadCloud2Line className="text-black flex px-5 text-3xl justify-center" />
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

export default Gedung;
