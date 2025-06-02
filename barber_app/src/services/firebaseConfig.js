
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCYQqF8QqVVgqfx50eqtv5dfc_olEICatc",
  authDomain: "projeto-barbearia-92c43.firebaseapp.com",
  projectId: "projeto-barbearia-92c43",
  storageBucket: "projeto-barbearia-92c43.firebasestorage.app",
  messagingSenderId: "242247847119",
  appId: "1:242247847119:web:aea244849baa5a593ffbba",
  measurementId: "G-XEJLN13BEV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);