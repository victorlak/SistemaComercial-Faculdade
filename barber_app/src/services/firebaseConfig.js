
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/*
REACT_APP_FIREBASE_APIKEY=AIzaSyCYQqF8QqVVgqfx50eqtv5dfc_olEICatc
REACT_APP_FIREBASE_AUTHDOMAIN=projeto-barbearia-92c43.firebaseapp.com
REACT_APP_FIREBASE_PROJECTID=projeto-barbearia-92c43
REACT_APP_FIREBASE_STORAGEBUCKET=projeto-barbearia-92c43.firebasestorage.app
REACT_APP_FIREBASE_MESSAGINGSENDERID=242247847119
REACT_APP_FIREBASE_APPID=1:242247847119:web:aea244849baa5a593ffbba
REACT_APP_FIREBASE_MEASUREMENTID=G-XEJLN13BEV
*/ 

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
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }