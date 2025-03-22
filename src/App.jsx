import React, { useState } from "react";
import { translateText } from "./utils/translate";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Translator() {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [fromLang, setFromLang] = useState("en");
    const [toLang, setToLang] = useState("yo");

    const handleTranslate = async () => {
        const result = await translateText(inputText, toLang, fromLang);
        setTranslatedText(result);
    };

    const startListening = () => {
        try {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = fromLang;
            recognition.start();

            recognition.onresult = (event) => {
                setText(event.results[0][0].transcript);
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                if (event.error === "network") {
                    alert("Network error. Check your internet connection and try again.");
                } else {
                    alert(`Speech recognition error: ${event.error}`);
                }
            };
        } catch (error) {
            console.error("Speech recognition not supported", error);
            alert("Your browser does not support speech recognition.");
        }
    };

    const speakText = () => {
        const speech = new SpeechSynthesisUtterance(translatedText);
        speech.lang = toLang;
        window.speechSynthesis.speak(speech);
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
                        <button onClick={startListening} className="absolute right-3 top-3 text-green-700 hover:text-green-900">
                            <i className="fas fa-microphone"></i>
                        </button>
                    </div>

                    {/* Translated Output */}
                    <div className="relative w-full md:w-1/2">
                        <textarea
                            readOnly
                            className="w-full h-40 p-3 border border-green-300 rounded-lg focus:outline-none bg-green-100"
                            value={translatedText}
                        ></textarea>
                        <button onClick={speakText} className="absolute right-3 top-3 text-green-700 hover:text-green-900">
                            <i className="fas fa-play"></i>
                        </button>
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
