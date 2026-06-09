import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyDnCWfdPxL0a5cyt5v_D87skc5hvzCy4LI",
  authDomain: "consultancy-website-c6eea.firebaseapp.com",
  projectId: "consultancy-website-c6eea",
  storageBucket: "consultancy-website-c6eea.appspot.com",
  messagingSenderId: "180894550408",
  appId: "1:180894550408:web:842e0f4ef363613c2d523d",
  measurementId: "G-RGN5LLLZJ7",
};

const app = initializeApp(firebaseConfig);

// Optional
const analytics = getAnalytics(app);

// 🔥 AUTH
export const auth = getAuth(app);

// 🔥 FIRESTORE (THIS WAS MISSING)
export const db = getFirestore(app);

export default app;