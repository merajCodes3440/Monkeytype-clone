// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import {Firestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwMyjo1pRLfj1WO-dfy1ZJcMU06-56dlg",
  authDomain: "accio-project01.firebaseapp.com",
  projectId: "accio-project01",
  storageBucket: "accio-project01.appspot.com",
  messagingSenderId: "247174478601",
  appId: "1:247174478601:web:77a9ac15c2a68d8e0d71d8",
  measurementId: "G-YEP12V1FB3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const db = app.firestore();
export {auth,db};