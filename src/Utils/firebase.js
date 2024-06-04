import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAMx-U1V2gLTFxuzfH2sDQ_7WsQQtO7-o",
  authDomain: "netflixgpt-5bafa.firebaseapp.com",
  projectId: "netflixgpt-5bafa",
  storageBucket: "netflixgpt-5bafa.appspot.com",
  messagingSenderId: "242123739905",
  appId: "1:242123739905:web:e6d056632a2e00b4c80100",
  measurementId: "G-4FS479QLZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();