import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "clone-422ec.firebaseapp.com",
  projectId: "clone-422ec",
  storageBucket: "clone-422ec.firebasestorage.app",
  messagingSenderId: "1015602980911",
  appId: "1:1015602980911:web:acf921aa7367a6db6cbeda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication and provider
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;