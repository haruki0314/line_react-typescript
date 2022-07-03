import React from "react";
import SingIn from "./components/SingIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "/Users/obaharuki/development/line_react-typescript/front/src/firebase";

import "./App.css";
import Line from "./components/pages/Line";

function App() {
  const user = useAuthState(auth);

  return <div className="App">{user ? <Line /> : <SingIn />}</div>;
}

export default App;
