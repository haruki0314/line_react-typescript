import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";

function SingOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut}>サインアウト</Button>
    </div>
  );
}

export default SingOut;
