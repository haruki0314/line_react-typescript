import React from "react";
import { FC } from "react";
import SingIn from "./components/SingIn";
import firebase from "firebase/compat/app";

import { auth } from "./firebase";

import "./App.css";
import Line from "./components/pages/Line";

function App() {
  // const user = useAuthState(auth);

  // return <div className="App">{user ? <Line /> : <SingIn />}</div>;
  return (
    <div>
      <SingIn />
    </div>
  );
}

export default App;
