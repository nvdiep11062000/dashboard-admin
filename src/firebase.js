// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg1FNsvUpBNlDohxO8QhFOvKuAxCu8wek",
  authDomain: "tutorial-612b4.firebaseapp.com",
  projectId: "tutorial-612b4",
  storageBucket: "tutorial-612b4.appspot.com",
  messagingSenderId: "96789637295",
  appId: "1:96789637295:web:1f6d151fb4014051974c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export default auth;