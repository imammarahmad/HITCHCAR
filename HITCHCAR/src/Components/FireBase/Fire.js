import firebase from 'firebase';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "",
    authDomain: "my-fyp-33a7f.firebaseapp.com",
    projectId: "my-fyp-33a7f",
    storageBucket: "my-fyp-33a7f.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = fire.auth();
export {db, fire,auth};
