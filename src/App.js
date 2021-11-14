import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Gameboard from "./components/Gameboard";
import _ from "lodash";

function App() {
  const [scrnFlag, setscrnFlag] = useState("home");
  const [deckOfCards, setdeckOfCards] = useState([]);

  const changeScreen = () => {
    if (scrnFlag === "home") {
      return <Home playerName = {saveName}/>;
    } else if (scrnFlag === "play") {
      return <Gameboard player={player} computer={computer} setscrnFlag={setscrnFlag}/>;
    }
  };

  const shuffle = () => {
    let cards = [];
    let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 52; i++) {
      let rand = Math.floor(Math.random() * (14 - 1) + 1);

      if (counter[rand - 1] < 4) {
        cards.push(rand);
        counter[rand - 1]++;
      } else {
        i--;
      }
    }
    setdeckOfCards(cards);
    console.log(cards);
    let x = _.countBy(cards);
    // console.log(x);
  };

  useEffect(() => {
    shuffle();
  }, []);

  const [player, setplayer] = useState({
    name: "",
    roundWins: 0,
    roundLoses: 0,
    numOfGamesWon: 0,
    numOfGamesLoses: 0,
    status: "",
    playerCards: [],
  });
  const [computer, setcomputer] = useState([]);

  let dealCards = () => {
    let decoyDeck = [...deckOfCards];
    let playerDeck = [];
    for (let i = 0; i < 26; i++) {
      let rand = Math.floor(Math.random() * (decoyDeck.length - 1));
      playerDeck.push(decoyDeck[rand]);
      decoyDeck.splice(rand, 1);
    }
    console.log(playerDeck);
    setplayer({ ...player, playerCards: playerDeck });
    console.log(decoyDeck);
    setcomputer(decoyDeck);
    setscrnFlag('play')
  };

  const saveName = (playerName) => {
    player.name = playerName;
    setplayer({...player});
    dealCards();
    console.log(`hello ${playerName}`);
  }

  return (
    <div className="App">
      {changeScreen()}
    </div>
  );
}

export default App;
