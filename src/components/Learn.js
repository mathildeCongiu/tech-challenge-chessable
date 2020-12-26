import React from "react";

export default function Learn(props) {
    console.log(props.playerHandler)
  return (
    <div className="learn">
        <h2> Play Mode</h2>
      <h3>Select a square to learn coordinates</h3>
      <h3>{props.selectedSquare}</h3>
      <p>or</p>
      <button onClick= {() => props.playerHandler(true)}>Play!</button>
    </div>
  );
}
