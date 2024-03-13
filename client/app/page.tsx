import { initializeApp } from "firebase/app";
import Signin from "@/components/Signin";

const firebaseConfig = {
  apiKey: "AIzaSyBe5BVAuXxcb3nPsK7B3-lGv7tmoaIGuXk",
  authDomain: "leetcode-clone-e1641.firebaseapp.com",
  projectId: "leetcode-clone-e1641",
  storageBucket: "leetcode-clone-e1641.appspot.com",
  messagingSenderId: "243745677626",
  appId: "1:243745677626:web:379d02efacb48f3884f003",
  measurementId: "G-KLE6N1KTY7",
};

const app = initializeApp(firebaseConfig);

export default function Home() {
  return (
    <div>
      <Signin />
    </div>
  );
}
