// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgWYgz537UqiglNOcWUVxFDgj96HlDOE4",
    authDomain: "challenge-a60e9.firebaseapp.com",
    projectId: "challenge-a60e9",
    storageBucket: "challenge-a60e9.appspot.com",
    messagingSenderId: "936947840811",
    appId: "1:936947840811:web:2ece21a96208b16dcbf76e",
    measurementId: "G-1W5HM8KL0P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};