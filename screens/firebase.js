// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLJmaRAWrQK-4r0BvJfjfqsujXAfggazc",
  authDomain: "fir-auth-3357a.firebaseapp.com",
  projectId: "fir-auth-3357a",
  storageBucket: "fir-auth-3357a.appspot.com",
  messagingSenderId: "80339595371",
  appId: "1:80339595371:web:13b3ca14e4174069fa812e",
};

// Initialize Firebase
let app;
if (firebase.getApps.length === 0) {
  app = initializeApp(firebaseConfig);
} else app = firebase.app();

const auth = getAuth(app);

export {auth}