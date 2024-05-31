import "./body.css";
import Middle_container from "../middle_container/middle_container.jsx";
import Player from "../player/player.jsx";
const Body_container = () => {
  return (
    <div className="body-container">
      <Player />
      <Middle_container />;
      <Player />
    </div>
  );
};

export default Body_container;
