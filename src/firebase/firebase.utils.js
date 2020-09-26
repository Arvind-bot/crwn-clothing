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

export const createUserProfileDocument= async (userAuth, additionalData)=>{
  if(!userAuth)return;
  // console.log(userAuth);
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);
  const snapShot=await userRef.get();
  // console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt=new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user",error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;