import { useState } from "react";
import BabyFormInput from "./Form";
import OutputWeight from "./Output";
import MotionWrapper from "../../animations/MotionWrapper";

const Weight = () => {
  const [result, setResult] = useState(null);

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-full mb-8 lg:mb-16 text-center">
          <h2 className="mb-3 text-xl md:text-4xl font-extrabold text-primary-dark font-poppins">
            Periksa Tumbuh Kembang Bayi
          </h2>
          <p className="mx-auto max-w-3xl text-primary-darkest text-base md:text-md font-open-sans">
            Masukkan usia dan berat badan bayi, lalu CrySense akan memberitahu apakah berat badannya ideal, kurang, atau berlebih
            berdasarkan standar WHO.
          </p>
        </div>
        <BabyFormInput onResult={setResult} />
        <OutputWeight result={result} />
      </div>
    </section>
  );
};

export default Weight;