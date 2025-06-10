import { Link } from "react-router-dom";
import MotionWrapper from "../animations/MotionWrapper";

const FeatureCry = ({
  title,
  description,
  features,
  image,
  checkIcon,
  reverse = false,
  buttonUrl,
  buttonText = "Analisis Sekarang",
  showButton = true,
}) => {
  return (
    <section className="bg-white">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6`}
      >
          <div className="w-full md:w-1/2 flex justify-center">
            <MotionWrapper variant="fade-left">
              <img src={image} alt={title} className="w-full" />
            </MotionWrapper>
          </div>

          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <MotionWrapper variant="fade-right" delay={0.1}>
              <h2 className="mb-2 text-2xl md:text-4xl font-extrabold text-primary-dark font-poppins">
                {title}
              </h2>
              <p className="mb-6 text-base font-light text-primary-darkest font-open-sans md:text-lg">
                {description}
              </p>
              <div className="space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" />
                    <p className="text-base text-primary-darkest font-open-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {showButton && (
                <div className="mt-8">
                  <Link
                    to={buttonUrl}
                    className="inline-flex justify-center items-center py-3 px-12 text-base font-semibold text-white rounded-lg bg-secondary-light hover:bg-secondary"
                  >
                    {buttonText}
                  </Link>
                </div>
              )}
            </MotionWrapper>
          </div>
      </div>
    </section>
  );
};

export default FeatureCry;