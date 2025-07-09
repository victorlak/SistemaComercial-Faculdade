// require('dotenv').config();

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpD4NNFcw1bbJi2rMGy2pMMMQdxgywMjQ",
  authDomain: "barbearia-oliveira-700b0.firebaseapp.com",
  projectId: "barbearia-oliveira-700b0",
  storageBucket: "barbearia-oliveira-700b0.firebasestorage.app",
  messagingSenderId: "641155618768",
  appId: "1:641155618768:web:075b936703fc6036334bd5",
  measurementId: "G-3JHFJPMQHG"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const analytics = getAnalytics(app);

export const login = (email, password) => 
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const onUserChanged = (callback) =>
  onAuthStateChanged(auth, callback);
