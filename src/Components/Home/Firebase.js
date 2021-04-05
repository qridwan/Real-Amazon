import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAA3-zJeQva7mDjDeGxzSY7NLbqjWp6HGI",
  authDomain: "real-94186.firebaseapp.com",
  projectId: "real-94186",
  storageBucket: "real-94186.appspot.com",
  messagingSenderId: "51230833303",
  appId: "1:51230833303:web:fc1f9580ef8ee2fb74c7d2",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
