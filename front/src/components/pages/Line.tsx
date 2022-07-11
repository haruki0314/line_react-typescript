import React, { useEffect, useState } from "react";
import SingOut from "../SingOut";
import { db } from "../../firebase";

function Line() {
  const [messages, setMessages] = useState();
  //pageをレンダリングしたときに(一回だけ読み込み)
  useEffect(() => {
    db.collection("message")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <div>{console.log(messages)}</div>
      Lineです。
      <SingOut />
    </div>
  );
}

export default Line;
