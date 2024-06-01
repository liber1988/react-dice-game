import "./body.css";
import { useState } from "react";
import Middle_container from "../middle_container/middle_container.jsx";
import Won from "../Won/won.jsx";

const Body_container = () => {
  const [checkTotal, setCheckTotal] = useState(true);
  const [winPlayer, setWinPlayer] = useState(0);
  if (checkTotal) {
    return (
      <div className="body-container">
        <Middle_container
          setCheckTotal={setCheckTotal}
          setWinPlayer={setWinPlayer}
        />
        ;
      </div>
    );
  } else {
    return (
      <div className="body-container">
        <Won playerWon={winPlayer} />
      </div>
    );
  }
};

export default Body_container;
