// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj-OmnRsb7L0c6erJPRSl4aLV7Kvjmlyw",
  authDomain: "curso-react-5d96f.firebaseapp.com",
  projectId: "curso-react-5d96f",
  storageBucket: "curso-react-5d96f.appspot.com",
  messagingSenderId: "576928228593",
  appId: "1:576928228593:web:b49f54f854d014cc1a7550",
  measurementId: "G-RQPTZL7H3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);  //supongo que o lo vamos a usar

export const db = getFirestore(app);