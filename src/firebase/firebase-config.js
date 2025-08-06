// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCksS2camzEwStgY4oCKpTv-nvuFNPJzcM",
  authDomain: "shop-auth-ceead.firebaseapp.com",
  projectId: "shop-auth-ceead",
  storageBucket: "shop-auth-ceead.firebasestorage.app",
  messagingSenderId: "392757618745",
  appId: "1:392757618745:web:c5613f20b29afec7ad45e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
