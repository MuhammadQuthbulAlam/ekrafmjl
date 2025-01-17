import GameDev from "../../app/component/GameDev";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
export async function generateMetadata() {
  return {
    title: "GameDev",
    description: "Halaman GameDev.",
  };
}
export default function page() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <GameDev />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
