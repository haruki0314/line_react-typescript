import React from "react";
import { FC } from "react";
import SingIn from "./components/SingIn";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import "./App.css";
import Line from "./components/pages/Line";

function App() {
  const user = useAuthState(auth);

  return <div className="App">{user ? <Line /> : <SingIn />}</div>;
}

export default App;
