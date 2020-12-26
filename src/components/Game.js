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
    <div className="learn" style= {{height: `${props.size}vw`, width: `${props.size}vw`}}>
      <h2> PLAYING MODE</h2>
      <button onClick={() => generateRandomSquare()}>Start !</button>
      
      <p>Find and click: {randomSquare}</p>
      {props.userSquare ? <div>
        <p> You selected: {props.userSquare}</p>
      {props.userSquare === randomSquare ? (
        <p>Great ! It's correct</p>
      ) : (
        <p> Try again</p>
      )}


      </div> : null 
      }
      
      <p>or</p>
      <button onClick={() => props.playerHandler(false)}>Learn!</button>
    </div>
  );
}
