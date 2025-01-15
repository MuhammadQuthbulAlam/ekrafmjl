import Potensi from "../../app/component/Potensi";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "Potensi Pengembangan Ekraf",
    description: "Halaman Potensi Pengembangan Ekraf.",
  };
}
export default function page() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Potensi />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
