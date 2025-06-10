import VisiMisi from "../components/about/VisiMisi";
import FeaturesAbout from "../components/content/FeaturesAbout";
import Footer from "../components/footer/Footer";
import HeroAbout from "../components/hero/HeroAbout";
import Navbar from "../components/navbar/Navbar";


function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <VisiMisi />
      <FeaturesAbout />
      <Footer />
    </>
  );
}

export default AboutPage;