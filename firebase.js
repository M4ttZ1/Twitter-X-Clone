// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMcQIltNzaEIU2VpX3oNX4K96nZVhpyiI",
  authDomain: "x-clone-e7f48.firebaseapp.com",
  projectId: "x-clone-e7f48",
  storageBucket: "x-clone-e7f48.appspot.com",
  messagingSenderId: "960673065529",
  appId: "1:960673065529:web:488e135da0e8ee173d7be8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)