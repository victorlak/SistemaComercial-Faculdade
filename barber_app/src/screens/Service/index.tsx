// authService.ts
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

// Login
export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logout = () => {
  return signOut(auth);
};

// Cadastro
export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Verifica usuário logado
export const onUserChanged = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
