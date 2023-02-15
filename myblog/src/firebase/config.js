import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDlzo6ysbogj6P4le6gV8b2tt5BAwLWwAg",
  authDomain: "vue3-firebase-951fe.firebaseapp.com",
  projectId: "vue3-firebase-951fe",
  storageBucket: "vue3-firebase-951fe.appspot.com",
  messagingSenderId: "669784617311",
  appId: "1:669784617311:web:fac25e413919446e6386ea",
};

// init firebase
const firebaseApp = initializeApp(firebaseConfig);

// init firestore service
const projectDB = getFirestore(firebaseApp);

// export firestore
export { projectDB };
