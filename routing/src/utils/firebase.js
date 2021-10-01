import firebase from "firebase";
import "firebase/firestore";   

const firebaseConfig = {
    apiKey: "AIzaSyA5yXOg8Rib5S6alui6N5FlV4bAg_yP2U8",
    authDomain: "km-laundry.firebaseapp.com",
    projectId: "km-laundry",
    storageBucket: "km-laundry.appspot.com",
    messagingSenderId: "4260881860",
    appId: "1:4260881860:web:7dc31691f5e59ae49b7091",
    measurementId: "G-WZWW4SX0BB"
  };

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

  export default firebase;