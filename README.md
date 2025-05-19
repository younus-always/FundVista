# 🎗️ FundVista – Empowering Giving, Transforming Lives  

## 📖 Project Overview

Welcome to **FundVista**, a modern, user-friendly, and secure donation platform designed to connect compassionate donors with impactful causes.  

Our mission is to make the process of giving **simple, transparent, and empowering** for everyone involved.  

We aim to create a seamless experience where users can:  
✅ Explore various donation campaigns  
✅ Contribute with confidence  
✅ Track their impact—all with just a few clicks  

Whether you're supporting **local initiatives, global causes, or personal efforts**, FundVista ensures every step of your donation journey is **easy, intuitive, and secure**.  

---

## 🌐 Live Demo  

🚀 **Frontend:** [FundVista UI](https://fundvista.netlify.app)    
🚀 **Backend:** [FundVista Server](https://fund-vista-server.vercel.app)

---

## 📌 Installation  

Follow these steps to set up the project on your local machine:  

### 🔹 Frontend Setup  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/fundvista-frontend.git
cd fundvista-frontend
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Configure environment variables**  
Create a `.env` file in the frontend root directory and add:  
```ini
VITE_FIREBASE_APIKEY=your_api_key
VITE_FIREBASE_AUTHDOMAIN=your_auth_domain
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_FIREBASE_APPID=your_app_id
```

4️⃣ **Start the frontend server**  
```sh
npm run dev
```
Then, open your browser and navigate to `http://localhost:5173/`  

### 🔹 Backend Setup  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/fundvista-backend.git
cd fundvista-backend
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Configure environment variables**  
Create a `.env` file in the backend root directory and add:  
```ini
DB_USER=your_database_user
DB_PASS=your_database_password
```

4️⃣ **Start the backend server**  
```sh
npm start
```
By default, the backend runs on `http://localhost:4000/`  

---

## ✨ Features  

### 🖥️ **Frontend**  
✅ Beautiful and responsive UI using **TailwindCSS** & **DaisyUI**  
✅ Secure authentication and data storage with **Firebase**  
✅ Interactive UI elements with **React Tooltip, SweetAlert2, & AOS**  
✅ Smooth animations & date picker for campaign management  
✅ Modular and reusable components for scalability  

### ⚙️ **Backend**  
✅ **Express.js** for server-side logic  
✅ **MongoDB** as a secure and scalable NoSQL database  
✅ **dotenv** for managing environment variables  
✅ **CORS** setup for seamless frontend-backend communication  
✅ **Vercel hosting** for easy deployment and scalability  

---

## 📦 Dependencies  

### 🔹 Frontend  

**Main Dependencies:**  
- [`react`](https://react.dev/) – Modern frontend framework  
- [`react-dom`](https://react.dev/) – DOM rendering for React  
- [`react-router-dom`](https://reactrouter.com/) – Routing solution  
- [`firebase`](https://firebase.google.com/) – Backend and database services  
- [`react-icons`](https://react-icons.github.io/react-icons/) – Icon library  
- [`react-hot-toast`](https://react-hot-toast.com/) – Stylish notifications  
- [`react-tooltip`](https://react-tooltip.com/) – Tooltip integration  
- [`sweetalert2`](https://sweetalert2.github.io/) – Beautiful alert popups  
- [`aos`](https://michalsnik.github.io/aos/) – Scroll animations  
- [`tailwindcss`](https://tailwindcss.com/) – Utility-first CSS framework  
- [`daisyui`](https://daisyui.com/) – UI component library  

**Development Dependencies:**  
- [`vite`](https://vitejs.dev/) – Lightning-fast development build tool  
- [`eslint`](https://eslint.org/) – JavaScript linter for clean code  
- [`@vitejs/plugin-react`](https://www.npmjs.com/package/@vitejs/plugin-react) – React plugin for Vite  

### 🔹 Backend  
- [`express`](https://expressjs.com/) – Minimalist web framework for Node.js  
- [`mongodb`](https://www.mongodb.com/) – NoSQL database for data storage  
- [`dotenv`](https://www.npmjs.com/package/dotenv) – Environment variable management  
- [`cors`](https://www.npmjs.com/package/cors) – Enable CORS for frontend-backend communication  

---

## 🚀 Deployment  

### 🔹 **Frontend (Netlify/Vercel)**  
1. Push your code to GitHub  
2. Deploy the repository to **Netlify** or **Vercel**  
3. Add your `.env` variables in the hosting platform  

### 🔹 **Backend (Vercel)**  
1. Push your code to GitHub  
2. Deploy using **Vercel**  
3. Ensure your `vercel.json` file is configured properly:  

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
```

---

## 🔑 Configuration  

### 🔹 Firebase Setup  
1. Go to **[Firebase Console](https://console.firebase.google.com/)**  
2. Create a new project or select an existing one  
3. Navigate to **Project Settings** → **General**  
4. Copy the **Firebase SDK Config** and paste it into the `.env` file  

### 🔹 MongoDB Setup  
1. Create a database in **MongoDB Atlas**  
2. Get your **database user** and **password**  
3. Update the `.env` file in the backend  

---

## 🛠 Troubleshooting  
**❓ Firebase Errors:** Check API key configuration and Firebase setup.  
**❓ TailwindCSS Not Working:** Ensure `postcss` and `autoprefixer` are installed.  
**❓ Backend Not Running:** Verify MongoDB connection and `.env` variables.  

---

## 👥 Contributors  
💡 **Md. Younus Islam** – [GitHub Profile](https://github.com/younus-always)  
🎉 Contributions are welcome! Feel free to fork the repo, open issues, and submit pull requests.  


---

## 🌟 Final Thoughts  

🌍 **FundVista is more than just a platform—it’s a movement!**  

We believe in the **power of giving** and the **impact of collective action**. Whether you're a donor or a campaign organizer, your contributions **make a difference**.  

💙 Thank you for being a part of this journey. Let’s make the world a better place, one donation at a time!  

**Happy coding & happy giving!** 🚀😊  
