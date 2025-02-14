import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2oFH09X4ucey0zKiPXjHFwL88XC9wV0",
  authDomain: "lgevents.firebaseapp.com",
  projectId: "lgevents",
  storageBucket: "lgevents.firebasestorage.app",
  messagingSenderId: "970191213609",
  appId: "1:970191213609:web:17baadafe92d9870653838",
  measurementId: "G-R8WL75QEJE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, collection, addDoc, getDocs };
