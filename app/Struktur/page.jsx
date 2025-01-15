import Struktur from "../../app/component/Struktur";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "Struktur Organisasi",
    description: "Halaman Struktur Organisasi.",
  };
}
export default function page() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Struktur />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
