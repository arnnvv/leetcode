"use client";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "@firebase/util";

const actionCodeSettings = {
  url: "http://localhost:3000",
  handleCodeInApp: true,
};

export default function Signin() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const onSignin = async () => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("sent email");
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      }
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button onClick={onSignin}>Signin</button>
    </div>
  );
}
