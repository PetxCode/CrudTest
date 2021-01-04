import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBCMC5Yod87oMScMRsOWVmnQtnwrhcrwNA",
  authDomain: "bdcl-todo.firebaseapp.com",
  projectId: "bdcl-todo",
  storageBucket: "bdcl-todo.appspot.com",
  messagingSenderId: "997155141450",
  appId: "1:997155141450:web:bf653b128f529c79a7b3b3",
});

const db = app.firestore();
const auth = app.auth();

export { db, auth };
