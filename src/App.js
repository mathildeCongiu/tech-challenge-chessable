import "./App.css";
import Board from "./components/Board";
import DiscreteSlider from "./components/DiscreteSlider";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import Learn from "./components/Learn";

function App() {
  const [size, setSize] = useState();
  const [toggleCoordinates, setToggleCoordinates] = useState("show");
  const [selectedSquare, setSelectedSquare] = useState();
  const [play, setPlay] = useState(false);
  const [unit, setUnit] = useState();

  const valuetext = (value) => {
    //The -10 value below avoids the board to touch the left and right boards by defining a maximum of 90vw instead of 100.
    setSize(value - 10);
    return value;
  };

  const showSelectedSquare = (selectedSquare) => {
    setSelectedSquare(selectedSquare);
  };

  const toggleCoordinatesHandler = () => {
    if (toggleCoordinates === "show") {
      setToggleCoordinates("hide");
    } else {
      setToggleCoordinates("show");
    }
  };

  const playerHandler = (bool) => {
    setPlay(bool);
  };

  useEffect(() => {
    if (window.innerWidth < 700) {
      setUnit("vw");
    } else {
      setUnit("vh");
    }
  }, []);

  return (
    <div className="App">
      <nav>
        <div className="nav-left">
          <img src="/logo.svg" alt="logo" />
          <li onClick={() => setPlay(false)}>Boardable</li>
        </div>
        <div className="nav-right">
          <li onClick={() => setPlay(false)}> Discover</li>
          <li onClick={() => setPlay(true)}>Play</li>
        </div>
      </nav>
      <DiscreteSlider valuetext={valuetext} className="slider" />
      <div className="full-content">
        <div className="main-container">
          {size < 15 ? (
            <p className="error-message">
              Oups, it seems too small, make the board bigger by using the
              slider.
            </p>
          ) : (
            <div className="full-board">
              <div className="nb-board" style={{ height: `${size}${unit}` }}>
                <div
                  className={`numbers ${toggleCoordinates}`}
                  style={{ height: "100%" }}
                >
                  <p>8</p>
                  <p>7</p>
                  <p>6</p>
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>
                </div>
                <Board
                  showSelectedSquare={showSelectedSquare}
                  size={size}
                  unit={unit}
                />
              </div>
              <div className={`coordinates ${toggleCoordinates}`}>
                <p>a</p>
                <p>b</p>
                <p>c</p>
                <p>d</p>
                <p>e</p>
                <p>f</p>
                <p>g</p>
                <p>h</p>
              </div>
            </div>
          )}
          {toggleCoordinates === "show" ? (
            <button onClick={() => toggleCoordinatesHandler()}>
              Hide Coordinates
            </button>
          ) : (
            <button onClick={() => toggleCoordinatesHandler()}>
              Show Coordinates
            </button>
          )}
        </div>
        {size < 15 ? null : (
          <div className="right-part">
            {play ? (
              <Game
                showSelectedSquare={showSelectedSquare}
                size={size}
                unit={unit}
                userSquare={selectedSquare}
                playerHandler={playerHandler}
              />
            ) : (
              <Learn
                size={size}
                unit={unit}
                userSquare={selectedSquare}
                playerHandler={playerHandler}
              ></Learn>
            )}
          </div>
        )}
      </div>
      <footer>
        <p>Tech Challenge - chessable</p>
        <p>Mathilde Congiu</p>
      </footer>
    </div>
  );
}

export default App;
