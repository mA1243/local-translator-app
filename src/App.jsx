import React, { useState } from "react";
import { translateText } from "./utils/translate";

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("yo");

  const handleTranslate = async () => {
    const result = await translateText(inputText, toLang, fromLang);
    setTranslatedText(result);
  };

  return (
    <div className="bg-green-50 flex items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg border border-green-300">
        <h1 className="text-2xl font-bold text-center mb-4 text-green-800">
          Nigerian Language Translator
        </h1>

        {/* Translation Section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Text Input */}
          <div className="relative w-full md:w-1/2">
            <textarea
              className="w-full h-40 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-100"
              placeholder="Enter text to translate..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>

          {/* Translated Output */}
          <div className="relative w-full md:w-1/2">
            <textarea
              readOnly
              className="w-full h-40 p-3 border border-green-300 rounded-lg focus:outline-none bg-green-100"
              value={translatedText}
            ></textarea>
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-1/2">
            <label className="block text-green-700 font-medium">From:</label>
            <select
              className="w-full p-2 border border-green-300 rounded-lg focus:outline-none bg-green-100"
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
            >
              <option value="en">English</option>
              <option value="yo">Yoruba</option>
              <option value="ha">Hausa</option>
              <option value="ig">Igbo</option>
            </select>
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-green-700 font-medium">To:</label>
            <select
              className="w-full p-2 border border-green-300 rounded-lg focus:outline-none bg-green-100"
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
            >
              <option value="yo">Yoruba</option>
              <option value="ha">Hausa</option>
              <option value="ig">Igbo</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {/* Translate Button */}
        <button
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>
    </div>
  );
}
