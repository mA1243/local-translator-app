import express from "express";
import cors from "cors";
import translate from "google-translate-api-x";

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

app.post("/translate", async (req, res) => {
  try {
    const { text, targetLang, sourceLang } = req.body;

    if (!text || !targetLang) {
      return res.status(400).json({ error: "Missing text or target language" });
    }

    const result = await translate(text, {
      from: sourceLang || "auto", // Auto-detect if sourceLang is missing
      to: targetLang,
      forceFrom: true, // Ensures translation works even if sourceLang is incorrect
    });

    res.json({ translatedText: result.text });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
