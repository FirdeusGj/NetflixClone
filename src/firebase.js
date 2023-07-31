import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBH7ULu2oP7w5M11yxtleNU2OOfo841_U",
    authDomain: "netflix-clone-c2f86.firebaseapp.com",
    projectId: "netflix-clone-c2f86",
    storageBucket: "netflix-clone-c2f86.appspot.com",
    messagingSenderId: "149357014073",
    appId: "1:149357014073:web:dd0d1228bc9454820231e8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth = firebase.auth();

  export { auth }
  export default db;