import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useEffect } from 'react';
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBXXL_2svIOIRYEArzq7Ai8G8xLQTTTqrU",
  authDomain: "iot-comm.firebaseapp.com",
  projectId: "iot-comm",
  storageBucket: "iot-comm.appspot.com",
  messagingSenderId: "707981957974",
  appId: "1:707981957974:web:5e3ecb242770f42e7b14f7",
  measurementId: "G-VFR4XEJGHK"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }
 const db = firebase.firestore();

const TemporaryTest = () => {
    useEffect(() => {
        db.collection("SOLARPAN01").onSnapshot((querySnapshot) => {
            const getDataFirebase = [];
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
              
            });
          
            
            // if(getDataFirebase.length > 0){
            //     const functionalArray = arrayFunc(getDataFirebase, id)
            //     setStatus(functionalArray)
            //     setLoading(false)
            // }
        });
       
    }, [])
    return (
        <div>
            <h1>Testing 1</h1>
        </div>
    );
};

export default TemporaryTest;