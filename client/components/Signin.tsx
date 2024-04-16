"use client";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

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

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localStorage:3000",
  // This must be true.
  handleCodeInApp: true,
};

export const SignIn = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const onSignIn = async () => {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    try {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      alert(`Email Sent to ${email}`);
      // ...
    } catch (error) {
      console.error(`Error in sending link to email ${error}`);
      alert(`Error in sending link to email ${error}`);
      // ...
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={onSignIn}>Send email</button>
    </div>
  );
};
