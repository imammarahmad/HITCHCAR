import firebase from 'firebase';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyBeYbgumkY3-Yfzq3icwGd_U1DOoxay6GA",
    authDomain: "my-fyp-33a7f.firebaseapp.com",
    projectId: "my-fyp-33a7f",
    storageBucket: "my-fyp-33a7f.appspot.com",
    messagingSenderId: "431427664806",
    appId: "1:431427664806:web:d8b68cebb00f3470356d67",
    measurementId: "G-ZKFVCRR95L"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = fire.auth();
export {db, fire,auth};