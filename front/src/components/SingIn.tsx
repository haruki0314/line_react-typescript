import React, { useState } from "react";
import Button from "@mui/material/Button";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Line from "./pages/Line";

// let user: boolean = false;
// eslint-disable-next-line react-hooks/rules-of-hooks
// let [user, setUser] = useState<boolean>(false);
let user: boolean = false;

function SingIn() {
  //0が未ログイン、1が済ログイン
  const alertFunc = () => {
    alert("アラート");
  };
  function singWithGoogle() {
    alert("login");
    const provider = new firebase.auth.GoogleAuthProvider();
    //errorだった場合、画面遷移を行いたくない。
    auth
      .signInWithPopup(provider)
      .then((success) => loginSuccessFunc(success))
      .catch((err) => loginErrorFunc(err));
  }
  const loginSuccessFunc = (success: any): void => {
    alert("success" + success);
    // setUser(true);
    user = true;
  };
  const loginErrorFunc = (err: string): void => {
    alert("error" + err);
    // setUser(false);
    user = false;
  };
  return (
    <div>
      {user ? (
        <Line />
      ) : (
        <Button variant="contained" onClick={singWithGoogle}>
          Googleでログインする
        </Button>
      )}
    </div>
  );
}

export default SingIn;
