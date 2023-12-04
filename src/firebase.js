import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getAuth, createUserWithEmailAndPassword as createUser, signInWithEmailAndPassword as signIn, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyC_qJTXABm4nwu0bBAi9_H-ilSIt2Zx5v4",
  authDomain: "chat-quiz-86d5b.firebaseapp.com",
  projectId: "chat-quiz-86d5b",
  storageBucket: "chat-quiz-86d5b.appspot.com",
  messagingSenderId: "151695098242",
  appId: "1:151695098242:web:6872c52c77fc1d921dcf9b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
export const GoogleProvider = new GoogleAuthProvider();

// Email/Password Authentication
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUser(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Error signing up with email and password", error);
    throw error;
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signIn(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Error signing in with email and password", error);
    throw error;
  }
};

// Add other providers or authentication methods as needed

export { auth };