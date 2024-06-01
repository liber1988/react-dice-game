import "./middle_container.css";
import Button from "../button/button.jsx";
import Dice from "../dice/dice.jsx";
import { useState } from "react";
import Player from "../player/player.jsx";
import Newgame from "../new_game/new_game.jsx";

const Middle_container = ({ setCheckTotal, setWinPlayer }) => {
  const [newDice, setNewDice] = useState(false);
  const [dice1Value, setDice1Value] = useState(null);
  const [dice2Value, setDice2Value] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [newGame, setNewGame] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [currentScorePlayerOne, setCurrentScorePlayerOne] = useState(0);
  const [currentScorePlayerTwo, setCurrentScorePlayerTwo] = useState(0);

  function changeDice() {
    if (
      totalScore === currentScorePlayerOne ||
      totalScore < currentScorePlayerTwo
    ) {
      setCheckTotal(false);
      setWinPlayer(1);
    }
    if (
      totalScore === currentScorePlayerTwo ||
      totalScore < currentScorePlayerOne
    ) {
      setCheckTotal(false);
      setWinPlayer(2);
    }
    if (currentPlayer === 1) {
      let score = currentScorePlayerOne;
      setNewDice(!newDice);
      setCurrentScorePlayerOne(score + dice1Value + dice2Value);
    } else {
      let scoreTwo = currentScorePlayerTwo;
      setNewDice(!newDice);
      setCurrentScorePlayerTwo(scoreTwo + dice1Value + dice2Value);
    }
  }
  function newGameUpdate() {
    setNewGame(!newGame);
    console.log(newGame);
    location.reload();
  }

  const handleHoldClick = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };
  return (
    <>
      <Player
        playerNumber={1}
        dice1Value={dice1Value}
        dice2Value={dice2Value}
        isCurrent={currentPlayer === 1}
        currentScorePlayerOne={currentScorePlayerOne}
      />
      <div className="middle-layer">
        <Button text="New Game" onClick={newGameUpdate} />
        <Dice key={newDice ? "dice1" : "dice2"} onImageChange={setDice1Value} />
        <Dice key={newDice ? "dice3" : "dice4"} onImageChange={setDice2Value} />
        <Button text="Roll Dice" onClick={changeDice} />
        <Button text="Hold" onClick={handleHoldClick} />
      </div>
      <Player
        playerNumber={2}
        dice1Value={dice1Value}
        dice2Value={dice2Value}
        isCurrent={currentPlayer === 2}
        currentScorePlayerOne={currentScorePlayerTwo}
      />
      <Newgame totalScore={setTotalScore} />
    </>
  );
};
export default Middle_container;
