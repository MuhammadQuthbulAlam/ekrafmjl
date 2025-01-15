import Gedung from "../../app/component/Gedung";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "Gedung MCC",
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
        <Gedung />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
