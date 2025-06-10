import Banner from "../../assets/banner.png";
import MotionWrapper from "../animations/MotionWrapper";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-col items-center">

            <MotionWrapper variant="fade-up" delay={0.1}>
                <div className="text-center">
                <h1 className="mb-4 text-2xl md:text-5xl font-black text-primary-dark leading-release font-poppins">
                    Parenting Cerdas Bersama CrySense
                </h1>
                <p className="mb-8 text-base md:text-lg font-normal text-primary-darkest sm:px-16 xl:px-48 font-open-sans">
                    Dengan CrySense, Anda bisa mengenali kebutuhan si kecil saat menangis dan memantau tumbuh kembangnya langsung dari satu platform yang siap mendampingi Anda setiap hari.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 font-open-sans">
                    <Link
                      to="/analisis"
                      className="inline-flex justify-center items-center py-3 px-12 text-base font-medium text-center text-white rounded-lg bg-secondary-light hover:bg-secondary"
                    >
                      Coba Sekarang
                    </Link>

                    <Link
                      to="/tentang"
                      className="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-secondary-light rounded-lg border border-secondary-light hover:border-secondary"
                    >
                      Explore Fitur
                    </Link>
                </div>
                </div>
            </MotionWrapper>
                  
            <MotionWrapper variant="fade-in" delay={0.3}>
                <div className="mb-6 lg:mb-0">
                <img src={Banner} alt="image hero" />
                </div>
            </MotionWrapper>

        </div>
      </div>
    </section>
  );
};

export default HeroHome;