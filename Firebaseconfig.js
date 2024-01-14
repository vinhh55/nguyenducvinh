// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAmX4Q5VKvMpFebsgoWlJ5Opnbe8egYYg",
  authDomain: "vinhhh-43570.firebaseapp.com",
  projectId: "vinhhh-43570",
  storageBucket: "vinhhh-43570.appspot.com",
  messagingSenderId: "428130058678",
  appId: "1:428130058678:web:96e14e9e29e77e2ffe0117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };