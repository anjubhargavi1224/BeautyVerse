// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASO9fFIiipXcA0LAbv4rnOdE0UzGU1Xiw",
  authDomain: "makeupproject-2eb23.firebaseapp.com",
  projectId: "makeupproject-2eb23",
  storageBucket: "makeupproject-2eb23.firebasestorage.app",
  messagingSenderId: "463825985801",
  appId: "1:463825985801:web:dbdc719e6e1b1a629df3d8",
  measurementId: "G-0B73F07M2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;