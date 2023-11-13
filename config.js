import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC-QUGuoQbP0G-yIZgGYOlJ4aUwln18Ues",
  authDomain: "student-attendance-6592b.firebaseapp.com",
  databaseURL: "https://student-attendance-6592b-default-rtdb.firebaseio.com",
  projectId: "student-attendance-6592b",
  storageBucket: "student-attendance-6592b.appspot.com",
  messagingSenderId: "598241893064",
  appId: "1:598241893064:web:5a9bfc1768fa91319ce3fd"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
