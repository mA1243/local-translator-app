# Nigerian Language Translator

## Overview
This is a simple **Nigerian Language Translator** app built with **React (Frontend)** and **Node.js + Express (Backend)**. It allows users to:
- Translate text between **English, Yoruba, Hausa, and Igbo**.
- Use **speech-to-text** (voice input) to enter text.
- Use **text-to-speech** to listen to translated text.

## Features
✅ Translate text between supported languages  
✅ Speech-to-text (voice input) 🎤  
✅ Text-to-speech (read aloud) 🔊  
✅ Simple and responsive UI  

---
## 🛠 Tech Stack
### **Frontend:**
- React.js
- Tailwind CSS for styling
- Web Speech API for **speech-to-text & text-to-speech**

### **Backend:**
- Node.js with Express.js
- `google-translate-api-x` for translation
- CORS and dotenv support

---
## 🚀 How to Run the App
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/translator-app.git
cd translator-app
```

### 2️⃣ Set Up the Backend (Node.js)
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install express cors google-translate-api-x
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```

### 3️⃣ Set Up the Frontend (React)
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   👉 `http://localhost:3000`

---
## 📌 Usage Instructions
1. **Enter text** in the input box (or use 🎤 voice input).
2. **Select the languages** for translation.
3. Click **Translate** to get the translated text.
4. Click **🔊 Play** to hear the translated text aloud.

---
## 🔥 Troubleshooting
### ❌ Getting a "Network" Error in Speech Recognition?
- Use **Google Chrome** (Edge may not support Web Speech API).
- Check if the microphone **has permission** (`chrome://settings/content/microphone`).
- Try running the frontend on **HTTPS** instead of HTTP.

### ❌ Backend Not Running?
- Ensure Node.js is installed (`node -v`).
- Check if another process is using port 5000:
  ```bash
  sudo lsof -i :5000  # Linux/macOS
  netstat -ano | findstr :5000  # Windows
  ```
- Kill the process and restart the server:
  ```bash
  kill -9 <PID>  # Linux/macOS
  taskkill /PID <PID> /F  # Windows
  ```

---
## 📜 License
This project is open-source and free to use.

### ✨ Enjoy Translating! 🚀

