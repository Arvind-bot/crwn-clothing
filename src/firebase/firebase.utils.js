import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDEjykxfqH6kcFjUSzx-qxC5rJM0AwNA7M",
  authDomain: "crwn-db-5068e.firebaseapp.com",
  databaseURL: "https://crwn-db-5068e.firebaseio.com",
  projectId: "crwn-db-5068e",
  storageBucket: "crwn-db-5068e.appspot.com",
  messagingSenderId: "372537577691",
  appId: "1:372537577691:web:5d2ce8c0740b9e01c6bcfe",
  measurementId: "G-P2PX19JMTP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoole=()=>auth.signInWithPopup(provider);

export default firebase;