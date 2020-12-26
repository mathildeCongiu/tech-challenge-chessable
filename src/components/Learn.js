import React from "react";

export default function Learn(props) {
  return (
    <div className="learn" style= {{height: `${props.size}vw`}}>
      <h2> LEARNING MODE</h2>
      <h3>Select a square to learn coordinates</h3>
      <h3>You selected: <span>{props.selectedSquare}</span></h3>
      <p>or</p>
      <button onClick={() => props.playerHandler(true)}>Play!</button>
    </div>
  );
}
