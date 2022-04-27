
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore ,  collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDal7rcOVzjHkxZPAbNBOEED77AsqaABNk",
  authDomain: "quetions-app.firebaseapp.com",
  projectId: "quetions-app",
  storageBucket: "quetions-app.appspot.com",
  messagingSenderId: "1088315107365",
  appId: "1:1088315107365:web:8c2e1b99a45bfdcf4737cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider()
export const auth = getAuth(app);
