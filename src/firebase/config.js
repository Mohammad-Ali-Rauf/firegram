import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoopireWZT56r8eRDyONdJ3zL88iJzmiQ",
    authDomain: "firegram-feab4.firebaseapp.com",
    projectId: "firegram-feab4",
    storageBucket: "firegram-feab4.appspot.com",
    messagingSenderId: "144596944454",
    appId: "1:144596944454:web:6d15c71f304345a1ac6c47"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };