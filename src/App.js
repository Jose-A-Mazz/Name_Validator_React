import "./styles.css";
import Input from "./Input";
import React, { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Invalid Name!");

  const typedMessageHandler = (typedInput) => {
    if (typedInput.length >= 4) {
      setMessage("Valid Name!");
    } else {
      setMessage("Invalid Name!");
    }
  };
  return (
    <div className="App">
      <Input onTypeMessage={typedMessageHandler} />
      <p className="message">{message}</p>
    </div>
  );
}
