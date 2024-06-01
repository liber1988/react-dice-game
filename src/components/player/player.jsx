import "./player.css";
const Player = ({
  playerNumber,
  dice1Value,
  dice2Value,
  isCurrent,
  currentScorePlayerOne,
}) => {
  return (
    <div className={!isCurrent ? "player-hide" : "player"}>
      <div>
        <p className="players-font-size">PLAYER {playerNumber}</p>
        {isCurrent ? (
          <p className="score">{dice1Value + dice2Value}</p>
        ) : (
          <p className="score">Score</p>
        )}
      </div>

      <div className="current-score">
        <p>CURRENT SCORE</p>
        <p>{currentScorePlayerOne}</p>
      </div>
    </div>
  );
};

export default Player;
