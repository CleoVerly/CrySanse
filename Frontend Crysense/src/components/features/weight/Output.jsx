import ImgOutput from "../../../assets/imgbaby.svg";
import MotionWrapper from "../../animations/MotionWrapper";

const OutputWeight = ({ result }) => {
  const status = result?.statusBayi || "-";
  const tips = result?.tips || "-";

  return (
    <section className="bg-white border border-gray-200 md:border-2 shadow max-w-screen-xl mx-auto px-8 mt-12 rounded-xl">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <MotionWrapper variant="fade-up" delay={0}>
            <h1 className="mb-4 sm:text-lg md:text-4xl font-black text-primary-dark leading-snug font-poppins">
              Status Berat Badan Bayi
            </h1>
            <p className="mb-6 font-light text-primary-darkest font-open-sans md:text-md">
              Berdasarkan data yang Anda masukkan, berikut status berat badan bayi Anda menurut standar WHO.
            </p>
            
          </MotionWrapper>

          <div className="space-y-4">
            <MotionWrapper variant="fade-up" delay={0.1}>
              <div>
                <h3 className="text-base font-semibold text-primary-dark font-poppins">
                  Hasil Pemeriksaan
                </h3>
                <p className="text-sm text-primary-darkest font-open-sans">
                  {status}
                </p>
              </div>
            </MotionWrapper>
            
            <MotionWrapper variant="fade-up" delay={0.2}>
              <div>
                <h3 className="text-base font-semibold text-primary-dark font-poppins">
                  Tips untuk Perkembangan Si Kecil
                </h3>
                <p className="text-sm text-primary-darkest font-open-sans">
                  {tips}
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <MotionWrapper variant="fade-right" delay={0}>
            <img
              src={ImgOutput}
              alt="Pantau berat badan bayi"
              className="w-full"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default OutputWeight;