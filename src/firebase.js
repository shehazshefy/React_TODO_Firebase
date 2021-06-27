import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_t9l_iLuXo8t1L056uXCTr2npDfx0-O8",
    authDomain: "todo-app-shz.firebaseapp.com",
    projectId: "todo-app-shz",
    storageBucket: "todo-app-shz.appspot.com",
    messagingSenderId: "608094716038",
    appId: "1:608094716038:web:2d8bbcab9584a44f69d107",
    measurementId: "G-8NRZ33SREV"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export {db};