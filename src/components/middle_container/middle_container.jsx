import "./middle_container.css";
import Button from "../button/button.jsx";
import Dice from "../dice/dice.jsx";

const images = [
  "../../assets/images/dice-1.png",
  "../../assets/images/dice-2.png",
];

const Middle_container = () => {
  return (
    <div className="middle-layer">
      <Button text="New Game" />
      <Dice images={images} />
      <Dice images={images} />
      <Button text="Roll Dice" />
      <Button text="Hold" />
    </div>
  );
};
export default Middle_container;
