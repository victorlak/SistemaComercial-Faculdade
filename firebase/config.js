import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const firebaseBD = getFirestore(app);

export const db = getFirestore(app);

// Inicializa o Auth
const auth = getAuth(app);

export { firebaseBD, auth};
