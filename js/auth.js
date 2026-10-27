// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNE1cD5S4HnRvyQyXEkEpf0EPBxRAr6oE",
    authDomain: "saylani-efa84.firebaseapp.com",
    projectId: "saylani-efa84",
    storageBucket: "saylani-efa84.firebasestorage.app",
    messagingSenderId: "76086782935",
    appId: "1:76086782935:web:850d3e05a07e3d9ae53992",
    measurementId: "G-19S8WT1D48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        if (!window.location.pathname.includes("dashboard.html")) {
            window.location.href = "./dashboard.html";
        }
    } else {
        // User is signed out
        // ...
        if (window.location.pathname.includes("dashboard.html")) {
            window.location.href = "./index.html";
        }
    }
});

const login = (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Logged in:", user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Login nahi hua: " + errorCode + errorMessage)

        });


}

const register = (e) => {
    e.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Sign up nahi hua: " + errorCode + " " + errorMessage)
        });
}

const logout = () => {

}


document.getElementById("login-form")?.addEventListener("submit", login)
document.getElementById("signup-form")?.addEventListener("submit", register)
document.getElementById("logout")?.addEventListener("click", logout)