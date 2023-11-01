
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRSu3tgw1qMD43nk_uAaYsmLqD3YFDOsw",
  authDomain: "test-62e50.firebaseapp.com",
  projectId: "test-62e50",
  storageBucket: "test-62e50.appspot.com",
  messagingSenderId: "780021515776",
  appId: "1:780021515776:web:79090c8f77c800b7bf3ae5",
  measurementId: "G-08S774TZ0T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
