import Cry from "../components/features/analysis/Cry";
import Footer from "../components/footer/Footer";
import HeroCry from "../components/hero/HeroCry";
import Navbar from "../components/navbar/Navbar";


function CryPage() {
  return (
    <>
      <Navbar />
      <HeroCry />
      <Cry />
      <Footer />
    </>
  );
}

export default CryPage;