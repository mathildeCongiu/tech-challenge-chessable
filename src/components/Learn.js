import React from "react";

export default function Learn(props) {
  return (
    <div className="learn" style={{ minHeight: `${props.size}vw` }}>
      <h2> LEARNING MODE</h2>
      <h3>Select a square to learn coordinates</h3>
      {props.userSquare ? (
        <h3>
          You selected: <span>{props.userSquare}</span>
        </h3>
      ) : null}
      <p>or</p>
      <button onClick={() => props.playerHandler(true)}>Play!</button>
    </div>
  );
}
