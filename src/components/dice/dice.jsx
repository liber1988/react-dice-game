import React, { useState, useEffect } from "react";
import "./dice.css";

const Dice = ({ onImageChange }) => {
  const images = [
    "/images/dice-1.png",
    "/images/dice-2.png",
    "/images/dice-3.png",
    "/images/dice-4.png",
    "/images/dice-5.png",
    "/images/dice-6.png",
  ];

  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
      onImageChange(randomIndex + 1);
    };

    getRandomImage();
  }, [onImageChange]);

  return (
    <div className="container">
      <div id="slider">
        {randomImage ? (
          <img className="active" src={randomImage} alt="Random" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dice;
