// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qJTXABm4nwu0bBAi9_H-ilSIt2Zx5v4",
  authDomain: "chat-quiz-86d5b.firebaseapp.com",
  projectId: "chat-quiz-86d5b",
  storageBucket: "chat-quiz-86d5b.appspot.com",
  messagingSenderId: "151695098242",
  appId: "1:151695098242:web:6872c52c77fc1d921dcf9b"
};

const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  const recordCheckIn = (userId) => {
    const timestamp = new Date().getTime();
    firebase.database().ref(`transactions/${userId}`).push({
      type: 'check-in',
      timestamp,
    });
  };
  
const recordCheckOut = (userId) => {
    const timestamp = new Date().getTime();
    firebase.database().ref(`transactions/${userId}`).push({
      type: 'check-out',
      timestamp,
    });
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {app};