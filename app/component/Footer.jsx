import Image from "next/image";
import logo from "../../public/Assets/images/LOGO MCC_120822.png";
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaPhoneSquare,
  FaMap,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer bg-slate-950 shadow mt-20" id="social">
      <div className="pt-5 md:mx-24 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-3 text-sm sm:mx-3">
        <div className="mx-4 bg-slate-950 text-white px-4 text-left pt-5 pb-5">
          <Image src={logo} alt="logo" className="w-28" />
          <div className="flex flex-row mt-3 mb-3">
            <FaPhoneSquare className="ri-phone-line text-1xl hover:text-sky-300 " />
            <p className="ml-3">+62 823 120 016 95</p>
          </div>
          <div className="flex flex-row ">
            <FaMap className="ri-map-pin-2-line text-4xl hover:text-red-300 " />
            <p className="ml-3">
              Creative Center, Jl. Suha, Majalengka Wetan, Kec. Majalengka,
              Kabupaten Majalengka, Jawa Barat 45411
            </p>
          </div>
          <br />
          <div className="pt-3 social-footer flex items-center sm:gap-7 gap-1">
            <a href="https://www.facebook.com/profile.php?id=61558329437743">
              <FaFacebook className="ri-facebook-circle-fill text-2xl hover:text-sky-700" />
            </a>
            <a href="https://wa.me/6282312001695">
              <FaWhatsapp className="ri-whatsapp-fill text-2xl hover:text-green-400" />
            </a>
            <a href="https://youtube.com/@komiteekrafmajalengka?si=1C31zZP2ZtZp59F8">
              <FaYoutube className="ri-youtube-fill text-2xl hover:text-red-600" />
            </a>
            <a href="https://www.instagram.com/ekrafmjlka.official/">
              <FaInstagram className="ri-instagram-fill text-2xl hover:text-pink-500" />
            </a>
            <a href="https://www.tiktok.com/@ekrafmjlka.official?_t=8rHT4Cf6N9U&_r=1">
              <FaTiktok className="ri-tiktok-fill text-2xl hover:text-green-300" />
            </a>
          </div>
        </div>
        <p className="mx-4 bg-slate-950 text-white px-4 text-left pt-5 pb-5 font-bold">
          Komite Ekonomi Kreatif <br />
          <br />
          <a href="/Komite">
            <span className="font-normal hover:text-sky-400">
              Tentang Komite Ekraf
            </span>
          </a>
          <br />
          <a href="/Struktur">
            <span className="font-normal hover:text-sky-400">
              Struktur Organisasi
            </span>
          </a>
          <br />
          <a href="/Potensi">
            <span className="font-normal hover:text-sky-400">
              Perencanaan Pengembangan Potensi Ekraf
            </span>
          </a>
        </p>
        <p className="mx-4 bg-slate-950 text-white px-4 text-left pt-5 pb-5 font-bold">
          Gedung MCC
          <br />
          <br />
          <a href="/Gedung">
            <span className="font-normal hover:text-sky-400">
              Tentang Gedung MCC
            </span>
          </a>
          <br />
          <a href="/Fasilitas">
            <span className="font-normal hover:text-sky-400">
              Fasilitas Gedung
            </span>
          </a>
          <br />
          <a href="#profile">
            <span className="font-normal hover:text-sky-400">
              Desa Tematik Kreatif
            </span>
          </a>
        </p>
      </div>
      <hr />
      <div className="container mx-auto px-4 items-center justify-between text-white text-center">
        <p className="py-4">
          Copyright &copy; 2024
          <span className="font-bold">
            {" "}
            Majalengka <span className="text-sky-400">Creative Center</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
