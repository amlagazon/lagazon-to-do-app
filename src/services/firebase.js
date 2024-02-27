// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY5RO_77BM0_fCMETXacimBtbLbTjIMyc",
  authDomain: "to-do-73768.firebaseapp.com",
  projectId: "to-do-73768",
  storageBucket: "to-do-73768.appspot.com",
  messagingSenderId: "851275207910",
  appId: "1:851275207910:web:da960756bba70f5b7fd727",
  measurementId: "G-84T57CXY6Z",
  databaseURL:
    "https://to-do-73768-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
