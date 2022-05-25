// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5OYJXU68yf3aB22imzU5PYA--S9o9SjQ",
  authDomain: "authentication-b130b.firebaseapp.com",
  projectId: "authentication-b130b",
  storageBucket: "authentication-b130b.appspot.com",
  messagingSenderId: "339566069121",
  appId: "1:339566069121:web:3ecaec752729a5f9641480"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);