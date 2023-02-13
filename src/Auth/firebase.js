import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9yvdKcJ8aiqJ5UncoRtYCuRpe4W5fZHs",
  authDomain: "eshopreactjs.firebaseapp.com",
  projectId: "eshopreactjs",
  storageBucket: "eshopreactjs.appspot.com",
  messagingSenderId: "282775810447",
  appId: "1:282775810447:web:8bf0cded0b6bbe84e79bfa",
  measurementId: "G-QGEPY4SHGG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

