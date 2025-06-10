import { useState, useRef } from "react";
import { audioBufferToWavBlob } from "./utils/audioBufferToWavBlob";
import Warning from "../../../assets/alert.svg";
import Mic from "../../../assets/mic.svg";
import Upload from "../../../assets/upload.svg";
import MotionWrapper from "../../animations/MotionWrapper";

const NOTES = [
  "Durasi maksimal 10 detik",
  "Pastikan suara cukup jelas dan tidak bising",
];

export function InputVoice({ setAudioBlob, audioBlob, setPrediction }) {
  const [fileName, setFileName] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const fileInputRef = useRef(null);

  const trimAndConvertToWav = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const duration = Math.min(audioBuffer.duration, 10);
    const sampleRate = audioBuffer.sampleRate;
    const numChannels = audioBuffer.numberOfChannels;

    const trimmedBuffer = audioContext.createBuffer(
      numChannels,
      duration * sampleRate,
      sampleRate
    );

    for (let channel = 0; channel < numChannels; channel++) {
      const originalData = audioBuffer.getChannelData(channel);
      const trimmedData = trimmedBuffer.getChannelData(channel);
      trimmedData.set(originalData.slice(0, duration * sampleRate));
    }

    return audioBufferToWavBlob(trimmedBuffer);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newName = file.name.replace(/\.(mp3|wav)$/i, "") + ".wav";
    setFileName(newName);
    const wavBlob = await trimAndConvertToWav(file);
    setAudioBlob(wavBlob);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleMicClick = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        chunksRef.current = [];

        mediaRecorder.ondataavailable = (e) => {
          chunksRef.current.push(e.data);
        };

        mediaRecorder.onstop = async () => {
          const blob = new Blob(chunksRef.current, { type: "audio/webm" });
          const wavBlob = await trimAndConvertToWav(blob);

          setFileName("rekaman-suara.wav");
          setAudioBlob(wavBlob);
          setIsRecording(false);
        };

        mediaRecorder.start();
        setIsRecording(true);

        setTimeout(() => {
          if (mediaRecorder.state === "recording") {
            mediaRecorder.stop();
          }
        }, 10000);
      } catch (e) {
        console.error("Mic error:", e);
        alert("Gagal mengakses mikrofon. Pastikan izin diberikan.");
      }
    }
  };

  const handleAnalyze = async () => {
    if (!audioBlob) {
      alert("Silakan unggah atau rekam suara terlebih dahulu.");
      return;
    }

    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append("suara", audioBlob, fileName || "audio.wav");

      const response = await fetch("https://crysense-be-production.up.railway.app/tangisan-bayi", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Gagal menganalisis audio.");
      }

      const result = await response.json();
      setPrediction(result.prediction || result.predictionOutput);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menganalisis audio.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <MotionWrapper variant="fade-up" delay={0}>
        <h3 className="text-md md:text-xl font-semibold text-primary-dark mb-4 font-poppins">
          Unggah Suara Tangisan Bayi
        </h3>
      </MotionWrapper>

      <div className="flex flex-col sm:flex-row items-stretch sm:space-x-2 space-y-2 sm:space-y-0">
        <div className="relative flex-1">
          <MotionWrapper variant="fade-up" delay={0.1}>
            <input
              type="file"
              accept=".mp3, .wav"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="w-full py-2 pl-4 pr-4 text-sm border border-pink-300 rounded-lg text-gray-700 outline-none flex items-center justify-between">
              <span className="truncate text-sm text-gray-500">
                {fileName || "Unggah atau rekam suara tangisan"}
              </span>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className={`text-secondary-light hover:text-secondary ${isRecording ? "animate-pulse" : ""}`}
                  onClick={handleMicClick}
                  title={isRecording ? "Sedang merekam..." : "Mulai rekam"}
                >
                  <img src={Mic} alt="Microphone" className="w-5 h-5" />
                </button>

                <div className="h-6 w-px bg-gray-300 mx-1" />

                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="text-secondary-light hover:text-secondary"
                >
                  <img src={Upload} alt="Upload" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fade-up" delay={0.1}>
          <button
            className="ml-2 px-6 py-2 bg-secondary-light text-white font-semibold rounded-lg hover:bg-secondary transition font-open-sans"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? "Menganalisis..." : "Analisis"}
          </button>
        </MotionWrapper>
      </div>

      {audioBlob && (
        <audio controls className="mt-4 w-full">
          <source src={URL.createObjectURL(audioBlob)} type={audioBlob.type} />
          Browser tidak mendukung audio
        </audio>
      )}

      <ul className="mt-4 space-y-2 text-sm text-primary-darkest font-open-sans">
          {NOTES.map((note, index) => (
            <li key={index} className="flex items-start gap-2">
              <img src={Warning} alt="warning" className="w-4 h-4 mt-0.5" />
              <span>{note}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}