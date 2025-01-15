import Contact from "../../app/component/Contact";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "Kontak",
    description: "Halaman Kontak.",
  };
}
export default function HalamanKontak() {
  return (
    <>
      <NavBar />
      <Contact />
      <Footer />
    </>
  );
}
