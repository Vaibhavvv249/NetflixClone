// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt3pMCfPYLSG90_RCMJgeC_RpLT-wFq7I",
  authDomain: "netfixclone-427d0.firebaseapp.com",
  projectId: "netfixclone-427d0",
  storageBucket: "netfixclone-427d0.firebasestorage.app",
  messagingSenderId: "353237444555",
  appId: "1:353237444555:web:c0145447ec0cdd298b784e",
  measurementId: "G-VHSE5KQRLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics); 

export const auth = getAuth();
