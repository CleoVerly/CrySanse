import Banner2 from "../../assets/imgabout.png";
import IconTangisan from "../../assets/crybaby.png";
import IconBerat from "../../assets/parenting.png";
import MotionWrapper from "../animations/MotionWrapper";

const HeroAbout = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <MotionWrapper variant="fade-up" delay={0}>
            <h1 className="mb-4 text-2xl md:text-5xl font-black text-primary-dark leading-snug font-poppins">
              Mengenal CrySense Lebih Dekat
            </h1>
            <p className="mb-6 text-base md:text-lg font-light text-primary-darkest font-open-sans">
              CrySense dirancang untuk mempermudah peran Anda sebagai orang tua,
              dengan fitur-fitur cerdas dan praktis, Anda bisa memahami kebutuhan bayi.
            </p>
          </MotionWrapper>

          <div className="space-y-4">
            <MotionWrapper variant="fade-up" delay={0.1}>
              <div className="flex items-start p-4 bg-white rounded-xl shadow-md max-w-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50">
                <img
                  src={IconTangisan}
                  alt="Icon Analisis Tangisan"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="text-base font-semibold text-primary-dark font-poppins">
                    Analisis Tangisan Bayi
                  </h3>
                  <p className="text-sm text-primary-darkest font-open-sans">
                    Mengenali arti tangisan bayi kini lebih mudah dengan unggah suara si kecil.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="fade-up" delay={0.2}>
              <div className="flex items-start p-4 bg-white rounded-xl shadow-md max-w-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50">
                <img
                  src={IconBerat}
                  alt="Icon Pantau Berat"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="text-base font-semibold text-primary-dark font-poppins">
                    Pantau Berat Badan
                  </h3>
                  <p className="text-sm text-primary-darkest font-open-sans">
                    Masukkan berat badan bayi, dan lihat hasil pertumbuhannya dalam teks sesuai standar WHO.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <MotionWrapper variant="fade-right">
            <img
              src={Banner2}
              alt="Pantau berat badan bayi"
              className="w-full"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
