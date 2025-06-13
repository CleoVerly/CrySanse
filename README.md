
# CrySense 👶🔊  

CrySense adalah sistem klasifikasi suara tangisan bayi untuk mendeteksi arti dari tangisan tersebut, seperti lapar, sakit, atau tidak nyaman, menggunakan pendekatan Machine Learning dan Deep Learning.

## 📌 Deskripsi  
Proyek ini bertujuan membantu orang tua dan pengasuh bayi memahami kebutuhan bayi berdasarkan analisis suara tangisan. Dataset yang digunakan berisi ribuan file audio `.wav` yang telah diklasifikasikan berdasarkan kategori tangisan.

## 🧠 Fitur
- Preprocessing audio (WAV)
- Ekstraksi fitur (MFCC, Chroma, Spectral Contrast, dll.)
- Augmentasi data
- Pelatihan model klasifikasi suara (ML/DL)
- Evaluasi performa model
- Visualisasi hasil klasifikasi

## 📁 Struktur Direktori
```
CrySanse/
├── dataset/                # Folder berisi audio tangisan bayi
├── preprocessing/          # Script preprocessing dan ekstraksi fitur
├── models/                 # Pelatihan dan evaluasi model
├── notebooks/              # Eksperimen Jupyter Notebook
├── utils/                  # Fungsi pembantu (helper functions)
├── requirements.txt        # Daftar dependensi proyek
├── README.md               # Dokumentasi proyek ini
```

## ✅ Cara Replikasi Proyek

### 1. Clone Repositori
```bash
git clone https://github.com/CleoVerly/CrySanse.git
cd CrySanse
```

### 2. Buat Virtual Environment & Install Dependensi
```bash
python -m venv venv
source venv/bin/activate     # Untuk Linux/macOS
venv\Scriptsctivate.bat    # Untuk Windows

pip install -r requirements.txt
```

### 3. Siapkan Dataset
Berikut link repository untuk dataset https://github.com/CleoVerly/CRYSENSE-DATASET
Unduh dan pastikan dataset Anda disimpan dalam folder `dataset/` dan terstruktur berdasarkan kelas:
```
dataset/
├── hungry/
│   ├── cry1.wav
│   └── cry2.wav
├── pain/
│   ├── cry3.wav
│   └── cry4.wav
├── discomfort/
    ├── cry5.wav
    └── cry6.wav
```

### 4. Jalankan Preprocessing
Ekstraksi fitur suara dari audio:
```bash
python preprocessing/extract_features.py
```

### 5. Latih Model
Gunakan Jupyter Notebook:
```bash
jupyter notebook notebooks/train_model.ipynb
```
Atau jalankan script pelatihan:
```bash
python models/train.py
```

### 6. Uji Prediksi
Gunakan model yang telah dilatih untuk memprediksi kelas dari file audio baru:
```bash
python models/predict.py --file path/to/audio.wav
```

## 📊 Visualisasi Output
- Confusion Matrix
- Grafik Akurasi & Loss
- Evaluasi per kelas

## 🛠 Teknologi yang Digunakan
- Python 3.x
- Librosa
- NumPy, Pandas
- Scikit-learn
- TensorFlow / PyTorch
- Matplotlib, Seaborn

## 🙋 Kontribusi
Kontribusi sangat terbuka! Silakan buat pull request atau buka issue untuk diskusi dan pengembangan lebih lanjut.


---

Terima kasih telah menggunakan **CrySense** — memahami bayi melalui suara. 💡👶
