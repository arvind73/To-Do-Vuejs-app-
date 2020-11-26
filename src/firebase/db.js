import firebase from 'firebase'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCvZtZC0lBN1WOHkl_tRZC_04KVfqByQYw",
    authDomain: "vue-fire-todo-90f6f.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-90f6f.firebaseio.com",
    projectId: "vue-fire-todo-90f6f",
    storageBucket: "vue-fire-todo-90f6f.appspot.com",
    messagingSenderId: "440364918946",
    appId: "1:440364918946:web:e0ecd396479b9259110ffb"
  };
  // Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();