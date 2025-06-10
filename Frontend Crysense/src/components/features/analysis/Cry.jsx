import { useState } from "react";
import { InputVoice } from "./Input";
import OutputCry from "./Output";

const Cry = () => {
  const [audioBlob, setAudioBlob] = useState(null);
  const [prediction, setPrediction] = useState(null);

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-full mb-8 lg:mb-16 text-center">
          <h2 className="mb-3 text-xl md:text-4xl tracking-tight font-extrabold text-primary-dark font-poppins">
            Analisis Tangisan Bayi Anda
          </h2>
          <p className="mx-auto max-w-3xl text-primary-darkest text-base md:text-lg font-open-sans">
            Membantu Anda mengenali apakah bayi sedang lapar, lelah, tidak nyaman, atau merasa sakit semua melalui suara tangisannya.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <InputVoice
            setAudioBlob={setAudioBlob}
            audioBlob={audioBlob}
            setPrediction={setPrediction}
          />
          <OutputCry prediction={prediction} />
        </div>
      </div>
    </section>
  );
};

export default Cry;