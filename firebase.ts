import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

interface firebaseConfigProps {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

// Your web app's Firebase configuration
const firebaseConfig: firebaseConfigProps = {
  apiKey: "AIzaSyCgQghoenEb5yp2gbCvwCtqMMIV397kikI",
  authDomain: "cambridgeenglish-a199d.firebaseapp.com",
  projectId: "cambridgeenglish-a199d",
  storageBucket: "cambridgeenglish-a199d.appspot.com",
  messagingSenderId: "1096822951311",
  appId: "1:1096822951311:web:e4bbb96ed5ba0d946b0ffa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const storage = firebaseApp.storage();

export { db, auth, storage, firebaseApp };
