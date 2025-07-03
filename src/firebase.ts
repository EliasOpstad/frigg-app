import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
// import { FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_MEASUREMENT_ID, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET } from '@env';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  //   apiKey: FIREBASE_API_KEY,
  //   authDomain: FIREBASE_AUTH_DOMAIN,
  //   projectId: FIREBASE_PROJECT_ID,
  //   storageBucket:FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  //   appId: FIREBASE_APP_ID,
  //   measurementId: FIREBASE_MEASUREMENT_ID
  // };
  
  // Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO4OwT1WXNY3ET1RVoKWgi6v5L2j7d7CA",
  authDomain: "frigg-896f0.firebaseapp.com",
  projectId: "frigg-896f0",
  storageBucket: "frigg-896f0.appspot.com",
  messagingSenderId: "456510194766",
  appId: "1:456510194766:web:643065a05f94823b2eef1f",
  measurementId: "G-9XZYN0RTR4"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Firebase Analytics and get a reference to the service
export const analytics = getAnalytics(app);
