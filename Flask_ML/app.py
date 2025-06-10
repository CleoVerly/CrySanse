from flask import Flask, request, jsonify
import librosa
import numpy as np
from tensorflow.keras.models import load_model
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Konfigurasi upload
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'wav'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load model
model = load_model("model_crysense.h5")

# Cek ekstensi file
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Fungsi ekstraksi MFCC
def extract_mfcc(file_path):
    signal, sr = librosa.load(file_path, sr=22050)
    mfcc = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=98)
    mfcc = mfcc[:, :38]
    mfcc = mfcc.T
    mfcc_input = mfcc[..., np.newaxis]
    mfcc_input = np.expand_dims(mfcc_input, axis=0)
    return mfcc_input

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "Tidak ada file yang dikirim"}), 400

    file = request.files['file']

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        try:
            mfcc_input = extract_mfcc(file_path)
            pred = model.predict(mfcc_input)
            predicted_class = int(np.argmax(pred))
            confidence = float(np.max(pred))

            class_description = ['silence', 'Discomfort', 'Burping', 'noise', 'Cold-Hot', 'Hungry', 'Belly Pain', 'laugh']
            description = class_description[predicted_class]
            return jsonify({
                "predicted_class": description,
                "confidence": confidence
            })

        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Format file tidak didukung"}), 400

if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True)

#['silence', 'Discomfort', 'Burping', 'noise', 'Cold-Hot', 'Hungry', 'Belly Pain', 'laugh']

# #menerima dalam bentuk json
# from flask import Flask, request, jsonify
# import numpy as np
# from tensorflow.keras.models import load_model
# import os

# app = Flask(__name__)

# # Load model
# model = load_model("model_crysense.h5")

# @app.route('/predict', methods=['POST'])
# def predict():
#     # Cek apakah request body berisi JSON dengan key 'mfcc'
#     if not request.is_json:
#         return jsonify({"error": "Request harus berupa JSON"}), 400
    
#     data = request.get_json()

#     if 'mfcc' not in data:
#         return jsonify({"error": "Field 'mfcc' tidak ditemukan di JSON"}), 400

#     mfcc = data['mfcc']

#     try:
#         # Pastikan mfcc adalah list 2D, konversi ke numpy array
#         mfcc = np.array(mfcc)

#         # Sesuaikan bentuk input model (contoh: transpose, slice sesuai model)
#         # Kalau model aslinya pakai (batch, time, features, 1)
#         # Contoh reshape:
#         mfcc = mfcc.T  # transpose kalau perlu (sama seperti ekstrak MFCC)
#         mfcc_input = mfcc[..., np.newaxis]
#         mfcc_input = np.expand_dims(mfcc_input, axis=0)

#         # Prediksi dengan model
#         pred = model.predict(mfcc_input)
#         predicted_class = int(np.argmax(pred))
#         confidence = float(np.max(pred))

#         return jsonify({
#             "predicted_class": predicted_class,
#             "confidence": confidence
#         })

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
