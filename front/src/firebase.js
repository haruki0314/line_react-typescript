import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPLY1W8_BkGCFNfDHfi7WAnhWPJJlmqT4",
  authDomain: "line-clone-417d4.firebaseapp.com",
  projectId: "line-clone-417d4",
  storageBucket: "line-clone-417d4.appspot.com",
  messagingSenderId: "178710873079",
  appId: "1:178710873079:web:00896310bae1084ef064f2",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
