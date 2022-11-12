import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyDdP0hiQYJyRym04_UXBMlifMk7fIt9c5I",
  authDomain: "pro-camel-riders.firebaseapp.com",
  projectId: "pro-camel-riders",
  storageBucket: "pro-camel-riders.appspot.com",
  messagingSenderId: "694037170693",
  appId: "1:694037170693:web:fdcd844d0329c6115fea6c",
  measurementId: "G-72CWZKQRYX",
};

//If an firebase app hasn't already been created
// @ts-ignore
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
