import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const inputHandler = (event) => {
    props.onTypeMessage(event.target.value);
  };

  return (
    <p>
      <label>Type Name </label>
      <input onChange={inputHandler} type="text" />
    </p>
  );
};

export default Input;
