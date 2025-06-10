import librosa
import numpy as np
import json

def audio_to_mfcc_string(file_path):
    """
    Load audio file dan ekstrak MFCC,
    lalu konversi MFCC ke JSON string.
    """
    # Load audio dengan sample rate 22050 Hz
    signal, sr = librosa.load(file_path, sr=22050)

    # Ekstrak MFCC dengan 98 koefisien, ambil 38 frame pertama
    mfcc = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=98)
    mfcc = mfcc[:, :38]
    mfcc = mfcc.T  # bentuk (38, 98)

    # Konversi numpy array ke list dan serialisasi ke JSON string
    mfcc_list = mfcc.tolist()
    mfcc_json_string = json.dumps(mfcc_list)

    return mfcc_json_string

def mfcc_string_to_array(mfcc_json_string):
    """
    Parsing JSON string MFCC dan kembalikan numpy array.
    """
    mfcc_list = json.loads(mfcc_json_string)
    mfcc_array = np.array(mfcc_list)
    return mfcc_array

if __name__ == "__main__":
    # Ganti dengan path file audio Anda
    file = "/Users/farizajyputra/Documents/tugas_dicoding/Capstone/Deployment/uploads/69BDA5D6-0276-4462-9BF7-951799563728-1436936185-1.1-m-26-bp (1)_aug208_pitch.wav"

    # Konversi audio ke MFCC JSON string
    mfcc_str = audio_to_mfcc_string(file)
    print("MFCC JSON String:")
    print(mfcc_str)  # print keseluruhan string JSON

    # Konversi JSON string kembali ke array numpy
    mfcc_arr = mfcc_string_to_array(mfcc_str)
    print("\nShape MFCC array:", mfcc_arr.shape)
    print("Sample data frame pertama (5 koefisien):", mfcc_arr[0][:5])
