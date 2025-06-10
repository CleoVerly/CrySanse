import React from "react";
import Crybaby from "../../assets/crybaby.png";
import practical from "../../assets/practical.png";
import Ai from "../../assets/ai.png";
import Parenting from "../../assets/parenting.png";
import MotionWrapper from "../animations/MotionWrapper";

const WhyCrysense = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <MotionWrapper variant="fade-left">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-primary-dark font-poppins">
              Mengapa CrySense?
            </h2>
            <p className="text-primary-darkest text-base md:text-xl font-open-sans">
              CrySense hadir sebagai sahabat digital Anda untuk memahami tangisan bayi dengan kasih dan ketenangan.
            </p>
          </div>
        </MotionWrapper>

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[ 
              { img: Crybaby, title: "Pahami Tangisan", desc: "CrySense bantu kamu tahu apakah ia lapar, lelah, atau butuh perhatian." },
              { img: practical, title: "Cepat dan Praktis", desc: "Unggah suara tangisan bayi, sistem kami akan menganalisisnya dalam hitungan detik." },
              { img: Ai, title: "Teknologi AI", desc: "Kenali jenis tangisan bayi secara cerdas dan responsif dengan teknologi machine learning." },
              { img: Parenting, title: "Teman Parenting", desc: "Support system kecil yang siap membantu kamu di masa-masa sibuk jadi orang tua." }
            ].map((item, index) => (
              <MotionWrapper key={index} variant="fade-up" delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <img src={item.img} alt={item.title} className="h-24 mb-4" />
                  <h3 className="text-md md:text-lg font-bold text-primary-darkest font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-primary-darkest font-open-sans">
                    {item.desc}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCrysense;