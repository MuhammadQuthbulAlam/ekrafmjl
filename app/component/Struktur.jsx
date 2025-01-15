"use client";
import Image from "next/image";
import org from "../../public/Assets/images/struktur.png";
const Struktur = () => {
  return (
    <>
      <h1 className="pt-32 text-center lg:text-2xl/tight text-2xl font-medium mb-5">
        Struktur Organisasi
        <span className="font-bold text-sky-400"> MCC</span>
      </h1>
      <p className="text-center">
        Struktur Organisasi Majalengka Creative Center
      </p>
      <Image
        src={org}
        alt="Struktur Organisasi"
        className="mt-10 text-center lg:w-[500px] w-[400px] md:m-50 mx-auto rounded-lg shadow"
      />
    </>
  );
};

export default Struktur;
