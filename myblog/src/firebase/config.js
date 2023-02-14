import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlzo6ysbogj6P4le6gV8b2tt5BAwLWwAg",
  authDomain: "vue3-firebase-951fe.firebaseapp.com",
  projectId: "vue3-firebase-951fe",
  storageBucket: "vue3-firebase-951fe.appspot.com",
  messagingSenderId: "669784617311",
  appId: "1:669784617311:web:fac25e413919446e6386ea",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

// export firestore
export { projectFirestore };
