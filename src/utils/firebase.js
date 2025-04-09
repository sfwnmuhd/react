// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRkePACv7Y7yMAtx4V1YU1Y11LL5rBPfg",
  authDomain: "swiggyclone-204b8.firebaseapp.com",
  projectId: "swiggyclone-204b8",
  storageBucket: "swiggyclone-204b8.firebasestorage.app",
  messagingSenderId: "611265180746",
  appId: "1:611265180746:web:2d87d1f3b4deb089ade2b3",
  measurementId: "G-CNMZH3GJTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);