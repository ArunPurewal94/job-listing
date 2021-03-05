import app from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoxqZu1rMaxBKNTJEQWxeF0CXZOv5qang",
  authDomain: "agency-beta.firebaseapp.com",
  projectId: "agency-beta",
  storageBucket: "agency-beta.appspot.com",
  messagingSenderId: "635981277755",
  appId: "1:635981277755:web:f29d241b46ab96c0384a1e",
};
// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };
