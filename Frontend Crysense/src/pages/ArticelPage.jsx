import ArticleCard from "../components/content/Card";
import Footer from "../components/footer/Footer";
import HeroSlider from "../components/hero/slider/HeroSlider";
import Navbar from "../components/navbar/Navbar";


function ArticelPage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ArticleCard />
      <Footer />
    </>
  );
}

export default ArticelPage;