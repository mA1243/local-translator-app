export const translateText = async (text, targetLang, sourceLang = "auto") => {
  try {
    if (!text) return "";

    const response = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, targetLang, sourceLang }),
    });

    const data = await response.json();
    return data.translatedText || "Translation failed";
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation failed";
  }
};
