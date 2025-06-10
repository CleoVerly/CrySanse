const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const app = express();
const port = 3000;

const API_KEY = "AIzaSyDvu-QjrYeiSlqw6HTJ8XSCcuVH3Jax8Sk";

const genAI = new GoogleGenerativeAI(API_KEY);

app.use(express.json());

app.listen(port, () => {
  console.log(`App Listening To ${port}`);
});

app.post("/", async (req, res) => {
  const { gender, umur, tinggi, berat } = req.body;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const prompt = `Analisis data bayi berikut berdasarkan standar WHO:
- Jenis Kelamin: ${gender}
- Usia: ${umur} bulan
- Tinggi: ${tinggi} cm
- Berat: ${berat} kg

Berikan jawaban dalam format JSON dengan struktur berikut:
{
  "statusBayi": "kesimpulan status ideal bayi berdasarkan WHO (misalnya: 'Berat badan ideal, tinggi sedikit di bawah rata-rata.')",
  "tips": "berikan beberapa tips singkat dan relevan untuk bayi dengan kondisi tersebut (misalnya: 'Pastikan asupan nutrisi seimbang, pantau perkembangan tinggi badan secara berkala.')"
}

Contoh pengisian untuk statusBayi: "Bayi Anda memiliki berat dan tinggi yang ideal untuk usianya menurut standar WHO."
Contoh pengisian untuk tips: "Lanjutkan pemberian ASI eksklusif atau susu formula yang sesuai. Ajak bayi bermain untuk stimulasi motorik."

Pastikan output HANYA berupa JSON yang valid tanpa markdown.
dan jika bisa hasilnya secara singkat
`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 150,
        responseMimeType: "application/json",
      },
    });

    if (
      !result.response ||
      !result.response.candidates ||
      result.response.candidates.length === 0
    ) {
      console.error("Invalid API response structure or no candidates:", result);
      if (
        result.response &&
        result.response.promptFeedback &&
        result.response.promptFeedback.blockReason
      ) {
        return res.status(400).send({
          error: "Content blocked by AI safety filters.",
          reason: result.response.promptFeedback.blockReason,
        });
      }
      return res
        .status(500)
        .send({ error: "AI did not return valid candidates." });
    }

    let responseText = result.response.text();

    if (!responseText || responseText.trim() === "") {
      console.error("AI returned empty text. Full response:", result.response);
      return res
        .status(500)
        .send({ error: "AI returned an empty text response." });
    }

    console.log("Raw AI text output:", responseText);

    const jsonRegex = /^```(?:json)?\s*([\s\S]*?)\s*```$/;
    const match = responseText.match(jsonRegex);

    let cleanedJsonString = responseText;
    if (match && match[1]) {
      cleanedJsonString = match[1];
    }
    console.log("Cleaned JSON string:", cleanedJsonString);

    try {
      const jsonOutput = JSON.parse(cleanedJsonString);

      res.json(jsonOutput);
    } catch (parseError) {
      console.error(
        "Failed to parse cleaned JSON:",
        cleanedJsonString,
        parseError
      );
      res.status(500).send({
        error: "Failed to parse AI response into JSON.",
        raw_text: responseText,
        cleaned_text: cleanedJsonString,
        details: parseError.message,
      });
    }
  } catch (error) {
    console.error("Error in POST / endpoint:", error);
    res.status(500).send({ error: error.message, stack: error.stack });
  }
});
