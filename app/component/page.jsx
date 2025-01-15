import React from "react";
import Image from "next/image";
import Img from "../../public/Assets/images/MCC2.jpg";
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

const page = () => {
  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-9 xl:px-40 lg:px-20">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Majalengka Creative Center merupakan bentuk stimulasi yang
              diberikan kepada pelaku kreatif di Majalengka, terutama kepada
              generasi muda guna menunjang industri kreatif dalam meningkatkan
              ekonomi.
            </p>
            <a
              href="/Komite"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-5 text-white shadow rounded-sm hover:scale-125"
            >
              Tentang Kami
            </a>
          </div>
          <div className="box">
            <Image
              src={Img}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-left font-medium mx-auto px-9 xl:px-40 lg:px-20 pt-20">
        17 Subsektor
        <span className="text-sky-400 font-bold"> Ekonomi Kreatif</span>
      </h2>
      <div className="container flex mx-auto px-9 xl:px-40 lg:px-20" id="Ekraf">
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
            <div className="text-center text-sm pt-3 font-medium">Fashion</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <MdFastfood className="ri-bowl-line flex justify-center text-2xl text-white" />
            </div>
            <div className="text-center text-sm pt-3 font-medium">Kuliner</div>
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
            <div className="text-center text-sm pt-3 font-medium">Aplikasi</div>
          </div>
          {/* Add more subsector items here */}
        </div>
      </div>
    </div>
  );
};

export default page;
