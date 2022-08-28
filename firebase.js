const firebaseConfig = {
  apiKey: "AIzaSyDblk1TXpPO2JSwaGAb44cShuD5btuuGDI",
  authDomain: "clone-two-26690.firebaseapp.com",
  projectId: "clone-two-26690",
  storageBucket: "clone-two-26690.appspot.com",
  messagingSenderId: "588661177749",
  appId: "1:588661177749:web:927dba1fe2f5be22bf8a9c",
  measurementId: "G-6JMPYGKQLF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

console.log(db);