import translate from "google-translate-api-x";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text, targetLang, sourceLang } = req.body;

    if (!text || !targetLang) {
      return res.status(400).json({ error: "Missing text or target language" });
    }

    const result = await translate(text, {
      from: sourceLang || "auto", // Auto-detect if sourceLang is missing
      to: targetLang,
      forceFrom: true,
    });

    return res.status(200).json({ translatedText: result.text });
  } catch (error) {
    console.error("Translation error:", error);
    return res.status(500).json({ error: "Translation failed" });
  }
}
