// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1mdHF5qzc3nFsLDWExEpfVecGMoyyW2E",
  authDomain: "mixfits-tokenized-waitlist.firebaseapp.com",
  projectId: "mixfits-tokenized-waitlist",
  storageBucket: "mixfits-tokenized-waitlist.appspot.com",
  messagingSenderId: "1027388859294",
  appId: "1:1027388859294:web:0f4e9835b7387d46e66c8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

export const ref = collection(db, 'whitelist');