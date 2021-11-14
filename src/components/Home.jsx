import React, { useState } from "react";
import Gameboard from "./Gameboard";

export default function Home(props) {
  const [name, setname] = useState("initialState");
  const nameInput = (e) => {
    setname(e.target.value);
  };
  return (
    <div>
      <h3>Ready for War</h3>
      <input type="text" placeholder="Enter your name" onChange={nameInput} />
      <br />
      <input
        type="button"
        value="Start"
        onClick={() => {
          if (name !== "") {
            props.playerName(name);
          } else {
            alert("Please enter your name");
          }
        }}
      />
    </div>
  );
}
