// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiMD1OG2eWkNC47MzIl9i5vjL1iygtec4",
  authDomain: "farias-cooking-luxury.firebaseapp.com",
  projectId: "farias-cooking-luxury",
  storageBucket: "farias-cooking-luxury.appspot.com",
  messagingSenderId: "10195811080",
  appId: "1:10195811080:web:b5ab95766d7234e5664abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;