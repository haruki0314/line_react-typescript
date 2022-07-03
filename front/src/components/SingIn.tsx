import React from "react";
import Button from "@mui/material/Button";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SingIn() {
  const alertFunc = () => {
    alert("アラート");
  };
  function singWithGoogle() {
    alert("login");
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button variant="contained" onClick={singWithGoogle}>
        Googleでログインする
      </Button>
    </div>
  );
}

export default SingIn;
