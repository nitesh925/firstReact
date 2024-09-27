// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

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

// Initialize Firestore and Authentication
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Authentication instance

// Export the Firestore and Auth instances
export { db, auth }; // Export both db and auth
