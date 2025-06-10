import { Label, TextInput, Radio, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import MotionWrapper from "../../animations/MotionWrapper";

const BabyFormInput = ({ onResult }) => {
  const [formData, setFormData] = useState({
    gender: "",
    umur: "",
    berat: "",
    tinggi: "",
  });

  // ✅ Ambil data dari localStorage saat komponen dimount
  useEffect(() => {
    const savedData = localStorage.getItem("babyFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    gender: formData.gender,
    umur: Number(formData.umur),
    berat: Number(formData.berat),
    tinggi: Number(formData.tinggi),
  };

  console.log("Saving to localStorage:", payload);
  localStorage.setItem("babyFormData", JSON.stringify(payload));
  console.log("Saved!");

  try {
    const response = await fetch("https://crysense-be-production.up.railway.app/berat-badan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    onResult(data);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};


  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div>
            <MotionWrapper variant="fade-up" delay={0}>
              <Label className="mb-4 block !text-primary-dark font-semibold  font-poppins">Gender Bayi</Label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <Radio
                    name="gender"
                    value="Perempuan"
                    checked={formData.gender === "Perempuan"}
                    onChange={handleChange}
                    className="!text-primary-darkest !border-primary-darkest !bg-white focus:!ring-0 focus:!ring-offset-0"
                  />
                  <span className="text-primary-darkest font-open-sans">Perempuan</span>
                </label>
                <label className="flex items-center gap-2">
                  <Radio
                    name="gender"
                    value="Laki-Laki"
                    checked={formData.gender === "Laki-Laki"}
                    onChange={handleChange}
                    className="!text-primary-darkest !border-primary-darkest !bg-white focus:!ring-0 focus:!ring-offset-0"
                  />
                  <span className="text-primary-darkest font-open-sans">Laki-laki</span>
                </label>
              </div>
            </MotionWrapper>
          </div>

          <div>
            <MotionWrapper variant="fade-up" delay={0.1}>
              <Label htmlFor="umur" className="mb-3 block !text-primary-dark font-semibold font-poppins">
                Usia (bulan)
              </Label>
              <TextInput
                id="umur"
                name="umur"
                value={formData.umur}
                onChange={handleChange}
                placeholder="Contoh: 6"
                required
                theme={{
                  field: {
                    input: {
                      base: "!bg-white !border-primary-dark !text-primary-dark font-open-sans placeholder:text-gray-500 focus:!ring-0 focus:!border-secondary",
                    },
                  },
                }}
              />
            </MotionWrapper>
          </div>

          <div>
            <MotionWrapper variant="fade-up" delay={0.2}>
              <Label htmlFor="berat" className="mb-3 block !text-primary-dark font-semibold">
                Berat (kg)
              </Label>
              <TextInput
                id="berat"
                name="berat"
                value={formData.berat}
                onChange={handleChange}
                placeholder="Contoh: 7.2"
                required
                theme={{
                  field: {
                    input: {
                      base: "!bg-white !border-primary-dark !text-primary-dark font-open-sans placeholder:text-gray-500 focus:!ring-0 focus:!border-secondary",
                    },
                  },
                }}
              />
            </MotionWrapper>
          </div>

          <div>
            <MotionWrapper variant="fade-up" delay={0.3}>
              <Label htmlFor="tinggi" className="mb-3 block !text-primary-dark font-semibold font-poppins">
                Panjang Badan (cm)
              </Label>
              <TextInput
                id="tinggi"
                name="tinggi"
                value={formData.tinggi}
                onChange={handleChange}
                placeholder="Contoh: 65"
                required
                theme={{
                  field: {
                    input: {
                      base: "!bg-white !border-primary-dark !text-primary-dark font-open-sans placeholder:text-gray-500 focus:!ring-0 focus:!border-secondary",
                    },
                  },
                }}
              />
            </MotionWrapper>
          </div>
        </div>

        <div className="text-center pt-4 font-open-sans">
          <MotionWrapper variant="fade-up" delay={0.4}>
            <Button
              type="submit"
              className="px-6 py-2 font-semibold text-white !bg-secondary-light hover:!bg-secondary focus:outline-none focus:ring-0 transition"
            >
              Hitung
            </Button>
          </MotionWrapper>
        </div>
      </form>
    </div>
  );
};

export default BabyFormInput;
