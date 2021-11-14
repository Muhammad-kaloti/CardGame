import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Gameboard(props) {
  // const [roundWin, setroundWin] = useState('');
  var [i, seti] = useState(0);

  const [computerScore, setcomputerScore] = useState(0);
  const [playerScore, setplayerScore] = useState(0);
  let playerCard = props.player.playerCards[i];
  let computerCard = props.computer[i];

  const roundWinner = () => {
    if (i < 26) {
      if (playerCard > computerCard) {
        setplayerScore((setplayerScore) => setplayerScore + 1);
        props.player.roundWins++;
        // setroundWin(props.player.name);
    // seti((i) => i + 1);
} else if (playerCard < computerCard) {
        setcomputerScore((setcomputerScore) => setcomputerScore + 1);
        props.player.roundLoses++;
        // setroundWin('computer');
    }
    seti((i) => i + 1);
    }else {
        // props.setscrnFlag('home')
        alert(computerScore + 'X' + playerScore)
    }
  };

//   const drawCard = () => {
//     seti((i) => i + 1);
//   };

  return (
    <div>
      <h3>Computer:{computerScore}</h3>
      <Card deck={computerCard} />
      <Card deck={playerCard} />
      <h3>
        {props.player.name}:{playerScore}
      </h3>
      <input
        type="button"
        value="Next"
        onClick={() => {
        //   drawCard();
          roundWinner();
        }}
      />
    </div>
  );
}
