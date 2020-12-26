import React from "react";

export default function Learn(props) {
  return (
    <div className="learn">
      <h2> Learn Mode</h2>
      <h3>Select a square to learn coordinates</h3>
      <h3>{props.selectedSquare}</h3>
      <br/>
      <p>or</p>
      <button onClick={() => props.playerHandler(true)}>Play!</button>
    </div>
  );
}
