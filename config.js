import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB-uvpNbigq24LOGxJdlvslAVSPYDsbkuE",
  authDomain: "e-ride-stage-96f95.firebaseapp.com",
  projectId: "e-ride-stage-96f95",
  storageBucket: "e-ride-stage-96f95.appspot.com",
  messagingSenderId: "104317926480",
  appId: "1:104317926480:web:7b653d423a46b084b8e555"
 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
