 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBoIaUJBtK26xxAZaz04eQuSA2JxbuV5jo",
    authDomain: "marioplan-7da83.firebaseapp.com",
    databaseURL: "https://marioplan-7da83.firebaseio.com",
    projectId: "marioplan-7da83",
    storageBucket: "",
    messagingSenderId: "159355636356",
    appId: "1:159355636356:web:3485bc339ca425f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase