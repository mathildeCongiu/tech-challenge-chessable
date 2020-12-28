import React, { useState, useEffect } from "react";

export default function Game(props) {
  const [randomSquare, setRandomSquare] = useState();
  const [userSelectedSquare, setuserSelectedSquare] = useState(null);

  useEffect(() => {
    let userSquare = props.userSquare;
    setuserSelectedSquare(userSquare);
  }, [props.userSquare]);

  const generateRandomSquare = () => {
    props.showSelectedSquare(null);
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let generatedSquare = `${
      letters[Math.floor(Math.random() * 8)]
    }${Math.floor(Math.random() * (8 - 1) + 1)}`;
    setRandomSquare(generatedSquare);
  };
  return (
    <div className="learn" style={{ minHeight: `${props.size}vw` }}>
      <h2> PLAYING MODE</h2>
      <button onClick={() => generateRandomSquare()}>Start !</button>
      {randomSquare ? (
        <p>
          Find and click: <span>{randomSquare}</span>
        </p>
      ) : null}
      {userSelectedSquare ? (
        <div>
          <p>
            You selected: <span>{userSelectedSquare}</span>
          </p>
          {userSelectedSquare === randomSquare ? (
            <p className="feedback-user">Great ! It's correct</p>
          ) : (
            <p className="feedback-user bad-answer"> Try again</p>
          )}
        </div>
      ) : null}

      <p>or</p>
      <button onClick={() => props.playerHandler(false)}>Learn!</button>
    </div>
  );
}
