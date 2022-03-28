import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyApvRYK9W6fQViG8q2DaqDdWWdsowayn-k",
  authDomain: "socialx-e22cb.firebaseapp.com",
  projectId: "socialx-e22cb",
  storageBucket: "socialx-e22cb.appspot.com",
  messagingSenderId: "8189525728",
  appId: "1:8189525728:web:db4840b4b74c68dcc41a85",
  measurementId: "G-00RZ13ZBMB"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
   const auth=firebase.auth();
  const storage = firebase.storage();


 export {db,auth,storage}
//  https://mediaapp-d96d1-default-rtdb.europe-west1.firebasedatabase.app
 