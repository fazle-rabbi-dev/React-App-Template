import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from "firebase/auth";

const getEnv = name => {
  return import.meta.env[`VITE_FIREBASE_${name}`]
};

const firebaseConfig = {
  apiKey: getEnv("apiKey"),
  authDomain: getEnv("authDomain"),
  projectId: getEnv("authDomain"),
  storageBucket: getEnv("storageBucket"),
  messagingSenderId: getEnv("messagingSenderId"),
  appId: getEnv("appId")
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
