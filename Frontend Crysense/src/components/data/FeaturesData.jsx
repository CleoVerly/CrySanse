import CryBaby from "../../assets/babyanalisis.png";
import CryAnalysis from "../../assets/cryanalysis.png";
import WeightAbout from "../../assets/babyweight1.png";
import WeightHome from "../../assets/babyweight.png";
import Check1 from "../../assets/checkcircle1.svg";
import Check2 from "../../assets/checkcircle2.svg";

export const featureAboutData = {
    cry: {
        title: "Fitur Analisis Tangisan",
        description:
        "Dengan fitur ini, Anda bisa mengetahui arti di balik tangisan bayi hanya dalam beberapa langkah sederhana.",
        features: [
        "Rekam atau unggah suara tangisan bayi (maksimal 10 detik).",
        "Pastikan format audio dalam bentuk .mp3 atau .wav.",
        'Klik tombol "Analisis" untuk memulai proses identifikasi.',
        "Tunggu beberapa detik untuk hasil jenis tangisan dan saran penanganannya.",
        ],
        image: CryBaby,
        checkIcon: Check1,
        reverse: false,
        buttonUrl: "/analisis",
    },
    weight: {
        title: "Fitur Pantau Berat Badan",
        description:
        "Pantau tumbuh kembang si kecil dengan mencatat berat badannya secara rutin. CrySense akan memberi tahu apakah beratnya sesuai dengan usia.",
        features: [
        "Pilih gender bayi: Perempuan atau Laki-laki.",
        "Masukkan usia bayi dalam bulan.",
        "Masukkan berat badan bayi saat ini dalam kilogram.",
        "Masukkan tinggi badan bayi dalam sentimeter",
        'Klik tombol "Hitung"untuk melihat status berat badan bayi berdasarkan standar WHO.',
        ],
        image: WeightAbout,
        checkIcon: Check1,
        reverse: true,
        buttonUrl: "/berat",
    },
};

export const featureHomeData = {
    cry: {
        title: "Analisis Tangisan Si Kecil",
        description:
        "Dengan CrySense, Anda cukup mengunggah suara tangisan si kecil, lalu biarkan teknologi AI kami mengidentifikasi apakah ia lapar, lelah, tidak nyaman, atau mungkin merasa sakit. Cepat, praktis, dan membantu Anda merespons dengan lebih tenang.",
        features: [
        "Deteksi otomatis arti tangisan hanya dari suara.",
        "Respon lebih cepat tanpa menebak-nebak.",
        "Dukung orang tua dalam merawat bayi dengan percaya diri.",
        ],
        image: CryAnalysis,
        checkIcon: Check1,
        reverse: false,
        buttonUrl: "/analisis",
    },
    weight: {
        title: "Pantau Berat Badan Si Kecil",
        description:
        "Pantau berat badan bayi secara rutin dengan CrySense. Cukup masukkan data terbaru, dan sistem kami akan menilai apakah tumbuh kembang si kecil sesuai standar. Praktis dan informatif.",
        features: [
        "Catat berat badan bayi dengan mudah dan cepat.",
        "Lihat berat badan si kecil sesuai standar WHO",
        "Dukung keputusan yang lebih tepat dalam merawat si kecil.",
        ],
        image: WeightHome,
        checkIcon: Check2,
        reverse: true,
        buttonUrl: "/berat",
    },
};
