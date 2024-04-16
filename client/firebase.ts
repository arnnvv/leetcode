import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmRc9_t8aemMygH1Tr3s3ihlDrYawQzms",
  authDomain: "letcode-300bb.firebaseapp.com",
  projectId: "letcode-300bb",
  storageBucket: "letcode-300bb.appspot.com",
  messagingSenderId: "230842900953",
  appId: "1:230842900953:web:0029673e874e34d20c79c8",
  measurementId: "G-CXWF69C6VT",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
