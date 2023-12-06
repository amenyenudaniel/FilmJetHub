import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcs17ZTzcOCGg3rAFnxt7U8MOr-qTK9Ks",
  authDomain: "film-project-a5721.firebaseapp.com",
  projectId: "film-project-a5721",
  storageBucket: "film-project-a5721.appspot.com",
  messagingSenderId: "488543921742",
  appId: "1:488543921742:web:718cbc3cb02637f24dc51f",
  measurementId: "G-T64H0HWRVQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
