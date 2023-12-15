
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTH_APIKEY,
  authDomain:  import.meta.env.VITE_FIREBASE_AUTH_AUTHDOMAIN,
  projectId:  import.meta.env.VITE_FIREBASE_AUTH_PROJECTID,
  storageBucket:  import.meta.env.VITE_FIREBASE_AUTH_STORAGEBUCKET,
  messagingSenderId:  import.meta.env.VITE_FIREBASE_AUTH_MESSSENID,
  appId:  import.meta.env.VITE_FIREBASE_AUTH_APPID
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
export const db = getFirestore(app)