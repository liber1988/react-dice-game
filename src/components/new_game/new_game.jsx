import "./new_game.css";
import Button from "../button/button";
import { useState } from "react";
const Newgame = ({ totalScore }) => {
  const [newGame1, setNewGame] = useState(false);

  function scoreFunction() {
    const targetScoreInput = document.getElementById("number-input");

    if (targetScoreInput.value) {
      totalScore(targetScoreInput.value);
      setNewGame(!newGame1);
    }
  }
  return (
    <div className={newGame1 ? "input-container hidden" : "input-container"}>
      <h1>
        Game Instructions: <img src="/images/dice.svg" className="dice-image" />
      </h1>
      <ol>
        <li>
          In your turn roll the dice at list once and accumulate the result, in
          "Current"
        </li>
        <li>
          you can roll again or click "Hold" to save the points from "Current"
          and end the turn
        </li>
        <li>
          Notice! if you get 6-6- you will lose all points from "current" and
          the turn will go to your opponent.
        </li>
        <li>
          If you managed to reach exactly the target score - you win! If you
          passed it - you Loose!
        </li>
      </ol>
      <h2>Please select a target score</h2>
      <input
        type="number"
        id="number-input"
        placeholder="Enter a Target score"
      />
      <Button text="Submit" onClick={scoreFunction}></Button>
    </div>
  );
};
export default Newgame;
