import Komite from "../../app/component/Komite";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "Komite Ekraf",
    description: "Halaman Komite Ekraf.",
  };
}
export default function page() {
  return (
    <>
      <NavBar />
      <Komite />
      <Footer />
    </>
  );
}
