import React, { useState, useEffect } from "react";

const Dice = ({ images }) => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    // Function to get a random image from the images array
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    };

    getRandomImage();
  }, [images]);

  return (
    <div className="dice-image">
      {randomImage ? <img src={randomImage} alt="Random" /> : <p>Loading...</p>}
    </div>
  );
};

export default Dice;
