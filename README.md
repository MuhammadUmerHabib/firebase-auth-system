# 🚀 NOVA STEP - Firebase Authentication System

A modern, responsive Login and Signup interface with full Firebase Authentication integration. The project includes protected routes (Dashboard) and automatic redirects based on the user's authentication state.

🔗 **Live Demo:** [https://YOUR-USERNAME.github.io/firebase-auth-system/](https://YOUR-USERNAME.github.io/firebase-auth-system/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

---

## ✨ Features

- **Modern Split-Screen UI:** A clean, visually appealing design with a responsive layout.
- **Firebase Authentication:** Secure Email/Password login and signup using Firebase.
- **Protected Routes:** 
  - Unauthenticated users trying to access `dashboard.html` are redirected to `index.html`.
  - Authenticated users trying to access the login/signup pages are redirected to `dashboard.html`.
- **Auth State Management:** Uses `onAuthStateChanged` to handle session persistence.
- **Responsive Design:** Adapts beautifully to mobile screens (hides the visual panel on small devices).

---

## 🛠️ Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox, Media Queries, modern styling.
- **JavaScript (ES6 Modules):** DOM manipulation, event handling.
- **Firebase v13.1.0 (Modular SDK):** Backend as a Service for authentication.

---

## 📂 Folder Structure

```text
firebase-auth-system/
│
├── index.html            # Login Page
├── signup.html           # Signup Page
├── dashboard.html        # Protected Dashboard (Only for logged-in users)
│
├── css/
│   └── style.css         # Main stylesheet
│
├── js/
│   └── auth.js           # Firebase configuration & Auth logic
│
└── assets/
    ├── logo.png          # Brand Logo
    └── men.jpg           # Visual Panel Image