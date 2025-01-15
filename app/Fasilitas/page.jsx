import Fasilitas from "../../app/component/Fasilitas";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "Fasilitas Gedung MCC",
    description: "Halaman Gedung MCC.",
  };
}
export default function page() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Fasilitas />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
