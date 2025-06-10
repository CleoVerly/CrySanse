import WhyCrysense from "../components/about/WhyCrysense";
import Features from "../components/content/FeaturesHome";
import Footer from "../components/footer/Footer";
import HeroHome from "../components/hero/HeroHome";
import Navbar from "../components/navbar/Navbar";


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <WhyCrysense />
      <Features/>
      <Footer />
    </>
  );
}

export default HomePage;