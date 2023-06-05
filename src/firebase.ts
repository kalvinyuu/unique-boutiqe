// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1-wKTdASdSlWoVujfTmL1UWBgNF6wztk",
  authDomain: "sveltestore-7a863.firebaseapp.com",
  databaseURL: "https://sveltestore-7a863-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sveltestore-7a863",
  storageBucket: "sveltestore-7a863.appspot.com",
  messagingSenderId: "728262883278",
  appId: "1:728262883278:web:a01b0bee069848d2091d9f",
  measurementId: "G-P041W0GZCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
