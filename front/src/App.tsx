import React, { useEffect, useState } from "react";
import { FC } from "react";
import SingIn from "./components/SingIn";
import firebase from "firebase/compat/app";
// import { user } from "./components/SingIn";

import { auth } from "./firebase";

import "./App.css";
import Line from "./components/pages/Line";
import SingOut from "./components/SingOut";

function App() {
  //https://www.youtube.com/watch?v=Js9BsBsczE8 状態うまく動かせてない
  let [user, setUser] = useState<boolean>(false);
  // useEffect(() => {
  //   // alert("変更されました。");
  // }, [user]);
  // const user = useAuthState(auth);

  // return <div className="App">{user ? <Line /> : <SingIn />}</div>;
  return (
    <div>
      <SingIn />
      <SingOut />
      <div>a</div>
    </div>
  );
}

export default App;
