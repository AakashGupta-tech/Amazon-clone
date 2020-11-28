import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9ZY8utyqmCjHELEnP_WTrMTYSYt-ne3c",
  authDomain: "fir-7b70f.firebaseapp.com",
  databaseURL: "https://fir-7b70f.firebaseio.com",
  projectId: "fir-7b70f",
  storageBucket: "fir-7b70f.appspot.com",
  messagingSenderId: "205824650043",
  appId: "1:205824650043:web:856965c82b7f38d921a51e",
  measurementId: "G-YXD1200NMD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
