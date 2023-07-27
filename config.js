import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf6Dey0YZNztGeZF8_8X-iLlEHSGXpl9Q",
  authDomain: "notesapp-6c9ef.firebaseapp.com",
  projectId: "notesapp-6c9ef",
  storageBucket: "notesapp-6c9ef.appspot.com",
  messagingSenderId: "1027609784844",
  appId: "1:1027609784844:web:56b54c2d3cabde2d62b429",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = firebase.auth();
