"use client";
import Image from "next/image";
import mcc from "../../public/Assets/images/MCC3.jpg";
import {
  FaGamepad,
  FaHandScissors,
  FaPaintBrush,
  FaBoxOpen,
} from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { GiTravelDress } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { MdOutlineArchitecture } from "react-icons/md";
import { HiMiniTv } from "react-icons/hi2";
import { PiGuitarThin } from "react-icons/pi";
import { MdOutlineAppRegistration } from "react-icons/md";
import { MdOutlinePublish } from "react-icons/md";

import komiteEkraf from "../../public/Assets/images/komite-ekraf.png";

const Komite = () => {
  return (
    <>
      <div className="">
        {/* SUbsektor Ekraf*/}
        <div className=" flex box mt-32 w-60 bg-white border-2 rounded-lg mx-auto">
          <Image
            src={komiteEkraf}
            className="w-52 mx-auto mt-5"
            alt="komite ekraf"
          />
        </div>
        <h2 className="text-2xl text-center font-medium mb-4 pt-10">
          17 Subsektor
          <span className="text-sky-400 font-bold"> Ekonomi Kreatif</span>
        </h2>
        <div className="container flex pb-5 pt-2" id="Ekraf">
          <div className="box rounded-lg flex flex-row gap-7 overflow-x-auto justify-between pt-5 pb-5 px-5">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <FaGamepad className="ri-gamepad-line flex justify-center text-2xl text-white"></FaGamepad>
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Game Developer
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <FaHandScissors className="ri-scissors-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">Kriya</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <HiHome className="ri-home-office-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Desain Interior
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <IoMdMusicalNotes className="ri-music-2-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">Musik</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <FaPaintBrush className="ri-brush-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Seni Rupa
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <FaBoxOpen className="ri-dropbox-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Desain Produk
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <GiTravelDress className="ri-handbag-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Fashion
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <MdFastfood className="ri-bowl-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Kuliner
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <FaPhotoFilm className="ri-scissors-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Film, Animasi & Video
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <FaCameraRetro className="ri-scissors-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Fotografi
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <GiPencilBrush className="ri-scissors-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Desain Komunikasi Visual
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <MdLiveTv className="ri-scissors-line flex justify-center text-2xl text-white" />
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Televisi & Radio
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <MdOutlineArchitecture className="ri-scissors-line flex justify-center text-2xl text-white"></MdOutlineArchitecture>
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Arsitektur
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <HiMiniTv className="ri-scissors-line flex justify-center text-2xl text-white"></HiMiniTv>
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Periklanan
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <PiGuitarThin className="ri-scissors-line flex justify-center text-2xl text-white"></PiGuitarThin>
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Seni Pertunjukan
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <MdOutlinePublish className="ri-scissors-line flex justify-center text-2xl text-white"></MdOutlinePublish>
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Penerbitan
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <MdOutlineAppRegistration className="ri-scissors-line flex justify-center text-2xl text-white"></MdOutlineAppRegistration>
              </div>
              <div className="text-center text-sm pt-3 font-medium">
                Aplikasi
              </div>
            </div>
            {/* Add more subsector items here */}
          </div>
        </div>

        {/*Tentang Ekraf*/}
        <div className="pt-26" id="organisasi">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-7">
            Komite Ekonomi{" "}
            <span className="font-bold text-sky-400">Kreatif</span>
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="box">
              <div className="box pt-5">
                <h1
                  className="text-left lg:text-2xl/tight text-2xl font-medium mb-3 ml-10"
                  id="Tentang-Ekraf"
                >
                  Tentang Komite
                  <span className="font-bold text-sky-400"> Ekraf</span>
                </h1>
                <div className="text-left mx-10 bg-white border-2 rounded-lg w-auto h-auto">
                  <div className="text-base px-4 py-4">
                    Komite pengembangan ekonomi kreatif majalengka adalah
                    lembaga mitra pemerintahan dalam penyusunan kegiatan
                    pengembangan, mengarahkan serta mengawal pelaksanaan program
                    aksi pengembangan ekonomi kreatif di kabupaten majalengka
                    sesuai dengan keputusan bupati majalengka nomor
                    eka.02.01/kep.513-bapedalitbang/2023.
                  </div>
                </div>
              </div>
              <Image
                src={mcc}
                alt=""
                className="flex rounded-lg lg:w-[440px] h-[280px] md:m-auto pt-10 mt-10"
              />
            </div>
            {/*Visi & Misi*/}
            <div className="box pt-5" id="visimisi">
              <h1 className="text-left ml-10 lg:text-2xl/tight text-2xl font-medium mb-2">
                Visi & Misi{" "}
                <span className="font-bold text-sky-400">Ekraf</span>
              </h1>
              <h3 className="pt-1 ml-10 text-2xl font-medium text-sky-400">
                Visi
              </h3>
              <div className="text-left mx-10 bg-white border-2 rounded-lg w-auto h-auto items-center">
                <div className="text-base px-4 py-4 text-wrap">
                  Terwujudnya ekonomi kreatif sebagai sektor potensial unggulan
                  yang mendukung pertumbuhan ekonomi di kabupaten majalengka.
                </div>
              </div>
              <h3 className="pt-5 ml-10 text-2xl font-medium text-sky-400">
                Misi
              </h3>
              <div className="text-left mx-10 bg-white border-2 rounded-lg w-auto h-auto items-center">
                <div className="text-base px-2 text-wrap">
                  <ul className="list-decimal px-4 py-4">
                    <li>
                      Mengoptimalisasi aktivasi gedung Majalengka Creative
                      Center sebagai ruang edukasi kreasi dan ekspresi bagi para
                      pelaku ekonomi kreatif di kabupaten majalengka
                    </li>
                    <li>
                      Mendorong pertumbuhan dan perkembangan ekosistem ekonomi
                      kreatif di kabupaten majalengka
                    </li>
                    <li>
                      Mendorong pemerintah kab majalengka dalam menerbitkan
                      peraturan daerah tentang ekonomi kreatif sebagai payung
                      hukum bagi tumbuh kembangangnya ekosistem ekonomi kreatif
                      di kabupaten majalengka
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Komite;
