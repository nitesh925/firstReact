// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbJ05-YElWMZ4X3RFXQ_BuHmXRyOnJwwI",
  authDomain: "matchmaking-87fe4.firebaseapp.com",
  databaseURL: "https://matchmaking-87fe4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "matchmaking-87fe4",
  storageBucket: "matchmaking-87fe4.appspot.com",
  messagingSenderId: "338540767677",
  appId: "1:338540767677:web:831319db0ea007d68c0ad4",
  measurementId: "G-NGC45F394G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore

// Export the db to use it in other files
export { db }; // Export the Firestore instance
