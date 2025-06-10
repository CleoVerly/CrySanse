const tangisanBayi = require("../models/tangisanModel");
const axios = require("axios");
const FormData = require("form-data");

exports.getTangisanBayi = async (req, res) => {
  try {
    const fetchDataTangisan = await tangisanBayi.find();
    if (fetchDataTangisan.length === 0) {
      res.status(404).json({ message: "Data Tangisan Tidak Ditemukan" });
    } else {
      res.status(200).json({ fetchDataTangisan });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postTangisanBayi = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ message: "No audio file ('suara') uploaded." });
  }

  let predictionResult;

  try {
    const audioBuffer = req.file.buffer;
    const originalFilename = req.file.originalname || "audio.wav";
    const mimetype = req.file.mimetype;

    const formData = new FormData();

    formData.append("file", audioBuffer, {
      filename: originalFilename,
      contentType: mimetype,
    });

    const pythonServiceUrl =
      process.env.PYTHON_ML_SERVICE_URL ||
      "https://crysense-microservices-production.up.railway.app/predict";

    console.log(
      `Sending audio to Python service at ${pythonServiceUrl} for prediction...`
    );
    try {
      const pythonResponse = await axios.post(pythonServiceUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });
      predictionResult = pythonResponse.data;
      console.log("Prediction result from Python service:", predictionResult);

      if (predictionResult.error) {
        console.warn(
          "Python service returned an error in prediction:",
          predictionResult.error
        );
      }
    } catch (pythonError) {
      console.error("Error calling Python ML service:", pythonError.message);
      if (pythonError.response) {
        console.error(
          "Python service response error data:",
          pythonError.response.data
        );
        predictionResult = {
          error: "Prediction service error",
          details: pythonError.response.data,
        };
      } else {
        predictionResult = {
          error: "Prediction service call failed",
          details: pythonError.message,
        };
      }
    }

    const dataToSaveToDB = {
      fileMetadata: {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
      },
      audioContent: audioBuffer,
      predictionOutput: predictionResult,
    };

    const savedEntry = await tangisanBayi.create(dataToSaveToDB);
    console.log(
      "Data (including prediction/error state) saved to MongoDB with ID:",
      savedEntry._id
    );

    if (
      predictionResult &&
      predictionResult.error &&
      !predictionResult.predicted_class
    ) {
      res.status(207).json({
        message:
          "Data Berhasil Disimpan, tetapi ada masalah dengan layanan prediksi.",
        predictionInfo: predictionResult,
        dbDocument: savedEntry,
      });
    } else {
      res.status(201).json({
        message: "Data Berhasil Ditambahkan dan Prediksi diterima",
        prediction: predictionResult,
        dbDocument: savedEntry,
      });
    }
  } catch (error) {
    console.error(
      "Error in postTangisanBayi main processing or DB saving:",
      error
    );
    res.status(500).json({
      message: "Gagal memproses permintaan sepenuhnya",
      error: error.message,
    });
  }
};

exports.getIdTangisanBayi = async (req, res) => {
  try {
    const suaraTangisan = await tangisanBayi.findOne({
      _id: req.params.id,
    });
    if (!suaraTangisan) {
      return res
        .status(404)
        .json({ message: "Data Tangisan tidak ditemukan dengan ID tersebut" });
    }
    res.status(200).json({ message: "Data Berhasil Ditemukan", suaraTangisan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
