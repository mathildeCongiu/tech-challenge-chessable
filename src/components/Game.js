import React, { useState } from "react";

export default function Game(props) {
  const [randomSquare, setRandomSquare] = useState();

  const generateRandomSquare = () => {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let generatedSquare = `${
      letters[Math.floor(Math.random() * 8)]
    }${Math.floor(Math.random() * (8 - 1) + 1)}`;
    setRandomSquare(generatedSquare);
  };
  return (
    <div className="learn">
      <h2> Play Mode</h2>
      <h2>Select the right square</h2>
      <button onClick={() => generateRandomSquare()}>Start !</button>
      
      <p>{randomSquare}</p>
      {props.userSquare === randomSquare ? (
        <p>Great ! It's correct</p>
      ) : (
        <p> Try again</p>
      )}
      <p>or</p>
      <button onClick={() => props.playerHandler(false)}>Learn!</button>
    </div>
  );
}
