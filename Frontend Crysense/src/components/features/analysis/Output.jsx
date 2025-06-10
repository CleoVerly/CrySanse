import MotionWrapper from "../../animations/MotionWrapper";

const OutputCry = ({ prediction }) => {
  const predictedClass = prediction?.predicted_class || "-";
  const confidence = prediction?.confidence ? (prediction.confidence * 100).toFixed(2) : null;

  const getTips = (label) => {
    switch (label) {
      case "Belly Pain":
        return "Tangisan akibat sakit perut biasanya terdengar melengking dan terus-menerus. Bayi bisa mengangkat atau menekuk kakinya ke arah perut. Cobalah pijat lembut di perut bagian bawah dengan gerakan searah jarum jam, bantu bayi bersendawa setelah menyusu, dan perhatikan pola buang airnya. Jika kondisi tidak membaik, konsultasikan ke dokter.";

      case "Burping":
        return "Tangisan ini sering terjadi karena bayi merasa tidak nyaman akibat gas yang terperangkap di dalam perut. Pastikan untuk menyendawakan bayi setelah menyusu dengan menepuk lembut punggungnya dalam posisi tegak. Gunakan posisi menyusui yang membantu mengurangi udara yang masuk.";

      case "Cold-Hot":
        return "Bayi sangat peka terhadap perubahan suhu. Tangisan karena suhu terlalu dingin atau panas biasanya terjadi tiba-tiba. Pastikan bayi mengenakan pakaian yang sesuai dan nyaman. Gunakan termometer ruangan untuk memastikan suhu ideal (sekitar 22–24°C). Sentuh bagian belakang leher bayi untuk mengecek apakah ia merasa terlalu panas atau dingin.";

      case "Discomfort":
        return "Tangisan karena ketidaknyamanan bisa berasal dari popok basah, baju ketat, posisi tidur yang salah, atau kulit yang gatal. Periksa kondisi tubuh bayi secara menyeluruh. Pastikan popok diganti tepat waktu, pakaian tidak mengganggu, dan tidak ada iritasi kulit. Sentuhan lembut dan perhatian penuh sangat membantu.";

      case "Hungry":
        return "Kelaparan adalah penyebab umum bayi menangis. Tangisan biasanya ritmis dan meningkat jika tidak segera diberi makan. Perhatikan juga tanda-tanda awal lapar seperti mengisap jari, mencari puting, atau membuka mulut. Memberikan ASI atau susu formula tepat waktu membantu bayi merasa aman dan tenang.";

      case "laugh":
        return "Jika bayi tertawa, ini bukan tangisan yang menunjukkan masalah. Tawa adalah tanda bahwa bayi merasa senang, nyaman, dan terhibur. Ini waktu yang baik untuk menjalin ikatan, bermain, dan memperkuat hubungan emosional dengan bayi.";

      case "noise":
        return "Bayi bisa menangis sebagai reaksi terhadap suara bising atau mengejutkan. Suara keras bisa membuat bayi stres atau sulit tidur. Cobalah pindahkan bayi ke tempat yang lebih tenang, redupkan lampu, dan ciptakan lingkungan yang mendukung kenyamanan. White noise kadang bisa membantu bayi tidur lebih nyenyak.";

      case "silence":
        return "Jika sistem mendeteksi tidak ada suara (senyap), kemungkinan bayi sedang tidur atau dalam kondisi tenang. Namun, tetap awasi bayi secara visual untuk memastikan bahwa semuanya dalam kondisi aman dan sehat. Pastikan juga perangkat perekam bekerja dengan benar.";

      default:
        return "-";
    }
  };

  return (
    <section className="bg-white border border-gray-200 md:border-2 shadow rounded-xl p-6 w-full md:w-1/2">
      <MotionWrapper variant="fade-up" delay={0.1}>
        <h1 className="mb-2 text-md md:text-xl font-black text-primary-dark leading-snug font-poppins">
          Hasil Analisis Tangisan Bayi
        </h1>
      </MotionWrapper>

      <MotionWrapper variant="fade-up" delay={0.2}>
        <p className="mb-6 font-light text-primary-darkest font-open-sans text-sm md:text-md">
          Berdasarkan suara yang Anda unggah, berikut hasil analisis jenis tangisan si kecil.
        </p>
      </MotionWrapper>

      <div className="space-y-4">
        <MotionWrapper variant="fade-up" delay={0.3}>
          <div>
            <h3 className="text-base font-semibold text-primary-dark font-poppins">Jenis Tangisan</h3>
            <p className="text-sm text-primary-darkest font-open-sans">
              {predictedClass} {confidence && `(Keyakinan: ${confidence}%)`}
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper variant="fade-up" delay={0.4}>
          <div>
            <h3 className="text-base font-semibold text-primary-dark font-poppins">Tips</h3>
            <p className="text-sm text-primary-darkest font-open-sans">
              {getTips(predictedClass)}
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OutputCry;