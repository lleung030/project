// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbPqMdBvmAaJwarcRVrzovIS_xqV0F3M4",
  authDomain: "project-5a8e8.firebaseapp.com",
  projectId: "project-5a8e8",
  storageBucket: "project-5a8e8.appspot.com",
  messagingSenderId: "143887141600",
  appId: "1:143887141600:web:2571625a1a1b9e81f71e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);