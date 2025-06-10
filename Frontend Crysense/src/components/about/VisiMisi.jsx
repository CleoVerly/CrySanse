import VisiMisiCard from './VisiMisiCard';
import Visi from '../../assets/visi.png';
import Misi from '../../assets/misi.png';
import MotionWrapper from "../animations/MotionWrapper";

const data = [
  {
    title: 'Visi CrySense',
    description:
      'Solusi yang membantu orang tua memahami kebutuhan bayi dengan cepat dan tepat. Kami percaya teknologi bisa menjadi pendamping yang penuh empati dalam proses pengasuhan.',
    image: Visi,
  },
  {
    title: 'Misi CrySense',
    description:
      'Memberikan akses mudah terhadap teknologi yang dapat mengidentifikasi tangisan bayi dan membantu orang tua merespons secara tepat dan penuh kasih.',
    image: Misi,
  },
];

const VisiMisi = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <MotionWrapper variant="fade-up" delay={0}>
          <div className="max-w-full mb-8 lg:mb-16 text-center">
              <h2 className="mb-4 text-xl md:text-3xl tracking-tight font-extrabold text-primary-dark font-poppins">
                  Dasar dari Setiap Langkah Kami
              </h2>
              <p className="mx-auto max-w-3xl text-primary-darkest text-base sm:text-xl font-open-sans">
                  Setiap fitur CrySense dibangun dari komitmen kami untuk mendampingi orang tua dengan teknologi yang peduli, praktis, dan penuh empati.
              </p>
          </div>
        </MotionWrapper>
              
        <MotionWrapper variant="fade-up" delay={0}>
          <div className="grid gap-8 md:grid-cols-2">
            {data.map((item, index) => (
              <VisiMisiCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default VisiMisi;
