"use client";
import Image from "next/image";
import pptx_1 from "../../public/Assets/images/Gedung/1.1.jpg";
import pptx_2 from "../../public/Assets/images/Gedung/1.2.jpg";
import pptx_3 from "../../public/Assets/images/Gedung/1.3.jpg";
import pptx_4 from "../../public/Assets/images/Gedung/1.4.jpg";
import pptx_5 from "../../public/Assets/images/Gedung/1.5.jpg";
import pptx_6 from "../../public/Assets/images/Gedung/1.6.jpg";
import pptx_7 from "../../public/Assets/images/Gedung/1.7.jpg";
import pptx_8 from "../../public/Assets/images/Gedung/1.8.jpg";
import pptx_9 from "../../public/Assets/images/Gedung/1.9.jpg";
import pptx_10 from "../../public/Assets/images/Gedung/1.10.jpg";
import pptx_11 from "../../public/Assets/images/Gedung/1.11.jpg";
import pptx_12 from "../../public/Assets/images/Gedung/1.12.jpg";
import pptx_13 from "../../public/Assets/images/Gedung/1.13.jpg";

const Potensi = () => {
  return (
    <>
      <h2 className="mt-10 pt-32 text-center lg:text-2xl/tight text-1xl font-medium mb-2">
        PERENCANAAN PENGEMBANGAN POTENSI EKONOMI KREATIF KABUPATEN MAJALENGKA
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 bg-white border-2 rounded-lg px-2 py-2 mx-10">
        <Image src={pptx_1} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_2} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_3} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_4} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_5} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_6} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_7} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_8} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_9} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_10} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_11} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_12} alt="1" className="mt-10 rounded-lg" />
        <Image src={pptx_13} alt="1" className="mt-10 rounded-lg" />
      </div>
    </>
  );
};

export default Potensi;
