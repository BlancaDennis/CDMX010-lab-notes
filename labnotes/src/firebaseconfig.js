import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAV-I2g_jbK63wYMhEUOoYol1SFz9va2GM",
    authDomain: "labnotesdenn.firebaseapp.com",
    projectId: "labnotesdenn",
    storageBucket: "labnotesdenn.appspot.com",
    messagingSenderId: "15268386023",
    appId: "1:15268386023:web:b171d08d74f879ad173e42"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  const firebas = firebase.initializeApp(firebaseConfig);
  const db = firebas.firestore()

  export {db}