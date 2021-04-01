import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDKxxgEcuXeIACFBoCGrelGv3XN4AHrTA0",
    authDomain: "geekintern-c58ac.firebaseapp.com",
    projectId: "geekintern-c58ac",
    storageBucket: "geekintern-c58ac.appspot.com",
    messagingSenderId: "30386109392",
    appId: "1:30386109392:web:2651402471aaa12e8b57d5",
    measurementId: "G-7VH5XFJYB9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};