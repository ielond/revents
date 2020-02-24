import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDQEg9QqNUeRWwi9LNeQi3-KtwI3Aw4yWE",
    authDomain: "revents-6fdd0.firebaseapp.com",
    databaseURL: "https://revents-6fdd0.firebaseio.com",
    projectId: "revents-6fdd0",
    storageBucket: "revents-6fdd0.appspot.com",
    messagingSenderId: "1094470384961",
    appId: "1:1094470384961:web:4568db5e754f213cf4b5c0",
    measurementId: "G-F8KFBGF6B2"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore();

export default firebase;
