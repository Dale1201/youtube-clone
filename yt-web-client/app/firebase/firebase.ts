// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA2BLSHhJVO3pXFdkfI6Keh0OAnAGIOjM",
  authDomain: "yt-clone-1a3e2.firebaseapp.com",
  projectId: "yt-clone-1a3e2",
  appId: "1:767578844889:web:730ba1bf26deb433d258c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
  return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
