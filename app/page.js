import NavBar from "./component/Navbar";
//import HeroImage from "./component/HeroImage";
import Footer from "./component/Footer";
import Home from "./component/page";
//import CardItems from "./components/CardContent";
//import OfficeHistory from "./components/OfficeHistory";

// Fungsi generateMetadata untuk meningkatkan SEO
export async function generateMetadata() {
  return {
    title: "Home | Majalengka Creative Center",
    description: "Website Resmi Majalengka Creative Center.",
  };
}

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
