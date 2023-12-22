// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAY7FhwL_Ujq6hL8NSRZCfB8wBhxRHT3WU",
  authDomain: "firechat-436cb.firebaseapp.com",
  projectId: "firechat-436cb",
  storageBucket: "firechat-436cb.appspot.com",
  messagingSenderId: "955464098939",
  appId: "1:955464098939:web:6c5c88662ad3504c4a6ede",
  measurementId: "G-KJ0PJSPCT6"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)