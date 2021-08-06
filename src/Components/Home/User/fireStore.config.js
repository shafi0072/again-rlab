import firebase from 'firebase'



if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyD_H-N97ETri2j8yI5c-X1YtguoBCWtWAU",
        authDomain: "rlab-1f739.firebaseapp.com",
        projectId: "rlab-1f739",
        storageBucket: "rlab-1f739.appspot.com",
        messagingSenderId: "663446234969",
        appId: "1:663446234969:web:0cf0efc959e952732c8e48",
        measurementId: "G-2EFCRDJGTP"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }

const db = firebase.firestore();

export default db;