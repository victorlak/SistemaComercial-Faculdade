// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYQqF8QqVVgqfx50eqtv5dfc_olEICatc",
  authDomain: "projeto-barbearia-92c43.firebaseapp.com",
  projectId: "projeto-barbearia-92c43",
  storageBucket: "projeto-barbearia-92c43.firebasestorage.app",
  messagingSenderId: "242247847119",
  appId: "1:242247847119:web:aea244849baa5a593ffbba",
  measurementId: "G-XEJLN13BEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);