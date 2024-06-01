import Button from "../button/button.jsx";
import { useState } from "react";
import Player from "../player/player.jsx";
import "./won.css";

const Won = ({ playerWon }) => {
  console.log("kjsdlkjfgh");
  const [newGame, setNewGame] = useState(false);
  function newGameUpdate() {
    location.reload();
  }
  return (
    <>
      <Player />
      <div className="middle-layer">
        <div className="player-won">
          <h1>Player {playerWon}</h1>
          <h2>is a winner</h2>
        </div>
        <Button text="New Game" onClick={newGameUpdate} />
      </div>
      <Player />
    </>
  );
};
export default Won;
