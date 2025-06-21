// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "website-directory-959bd.firebaseapp.com",
  projectId: "website-directory-959bd",
  storageBucket: "website-directory-959bd.firebasestorage.app",
  messagingSenderId: "565914497881",
  appId: "1:565914497881:web:f8aeac60c13ca58ef31248",
  measurementId: "G-9DV0MN5ZFE",
};

// Debug: Check if API key is available
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  console.error(
    "Firebase API key is missing! Please set NEXT_PUBLIC_FIREBASE_API_KEY in your environment variables."
  );
}

// Check for already initialized app
const currentApps = getApps();
let auth;
let storage;
let db;

// Initialize Firebase
try {
  if (!currentApps.length) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    storage = getStorage(app);
    db = getFirestore(app);
    console.log("Firebase initialized successfully");
  } else {
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
    db = getFirestore(app);
    console.log("Firebase already initialized, using existing app");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { auth, storage, db };
