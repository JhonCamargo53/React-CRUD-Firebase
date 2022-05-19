import firebase from 'firebase/app'
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7pcnd2B6W8nBxVA3ZM3MTwSblpMONRV4",
    authDomain: "react-user-crud.firebaseapp.com",
    projectId: "react-user-crud",
    storageBucket: "react-user-crud.appspot.com",
    messagingSenderId: "1087964143595",
    appId: "1:1087964143595:web:246b20ba4d4ec41f80c3ae"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const dataBase = app.firestore();