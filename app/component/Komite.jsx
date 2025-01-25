"use client";
import Image from "next/image";
import mcc from "../../public/Assets/images/MCC3.jpg";

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

        {/*Tentang Ekraf*/}
        <div className="pt-26" id="organisasi">
          <h1 className="text-center mt-10 lg:text-2xl/tight text-2xl font-medium mb-7">
            Komite Ekonomi{" "}
            <span className="font-bold text-sky-400">Kreatif</span>
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="box">
              <div className="box pt-5">
                <h2
                  className="text-left lg:text-1xl/tight text-1xl font-medium mb-3 ml-5"
                  id="Tentang-Ekraf"
                >
                  Tentang Komite
                  <span className="font-bold text-sky-400"> Ekraf</span>
                </h2>
                <div className="text-left mx-5 bg-white border-2 rounded-md w-auto h-5/6">
                  <div className="text-justify px-4 py-4">
                    Komite pengembangan ekonomi kreatif majalengka adalah
                    lembaga mitra pemerintahan dalam penyusunan kegiatan
                    pengembangan, mengarahkan serta mengawal pelaksanaan program
                    aksi pengembangan ekonomi kreatif di kabupaten majalengka
                    sesuai dengan keputusan bupati majalengka nomor
                    eka.02.01/kep.513-bapedalitbang/2023.
                  </div>
                  <Image
                    src={mcc}
                    alt=""
                    className="flex items-center justify-center text-center my-5 rounded-md lg:w-[480px] h-[280px] md:mx-5"
                  />
                </div>
              </div>
            </div>
            {/*Visi & Misi*/}
            <div className="box pt-5" id="visimisi">
              <h1 className="text-left ml-5 lg:text-1xl/tight text-1xl font-medium mb-2">
                Visi & Misi{" "}
                <span className="font-bold text-sky-400">Ekraf</span>
              </h1>
              <div className="mx-5 bg-white border-2 rounded-md w-auto h-auto">
                <h3 className="pt-1 ml-5 text-1xl font-medium text-sky-400">
                  Visi
                </h3>
                <div className="text-left mx-5 bg-white border-2 rounded-md w-auto h-auto items-center">
                  <div className="text-justify px-4 py-4 text-wrap">
                    Terwujudnya ekonomi kreatif sebagai sektor potensial
                    unggulan yang mendukung pertumbuhan ekonomi di kabupaten
                    majalengka.
                  </div>
                </div>
                <h3 className="pt-5 ml-5 text-1xl font-medium text-sky-400">
                  Misi
                </h3>
                <div className="text-left mx-5 my-0 mb-5 bg-white border-2 rounded-md w-auto h-auto items-center">
                  <div className="text-justify px-2 text-wrap">
                    <ul className="list-decimal px-4 py-4">
                      <li>
                        Mengoptimalisasi aktivasi gedung Majalengka Creative
                        Center sebagai ruang edukasi kreasi dan ekspresi bagi
                        para pelaku ekonomi kreatif di kabupaten majalengka
                      </li>
                      <li>
                        Mendorong pertumbuhan dan perkembangan ekosistem ekonomi
                        kreatif di kabupaten majalengka
                      </li>
                      <li>
                        Mendorong pemerintah kab majalengka dalam menerbitkan
                        peraturan daerah tentang ekonomi kreatif sebagai payung
                        hukum bagi tumbuh kembangangnya ekosistem ekonomi
                        kreatif di kabupaten majalengka
                      </li>
                    </ul>
                  </div>
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
