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

  function valuetext(value) {
    setSize(value);
    return value;
  }

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

  useEffect(() => { if (window.innerWidth < 700) {
      setUnit("vw")
    }
    else {
      setUnit("vh")
    }
  }, [])

  return (
    <div className="App">
      <nav>
        <div className="nav-left">
          <img src="/logo.svg" alt="logo" />
          <li>Boardable</li>
        </div>
        <div className="nav-right">
          <li onClick={() => setPlay(false)}> Discover</li>
          <li onClick={() => setPlay(true)}>Play</li>
        </div>
      </nav>
      {/* <h1>Play my board!</h1> */}
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
                <Board showSelectedSquare={showSelectedSquare} size={size} unit = {unit}/>
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
        {size >= 80 || size < 15 ? null : (
          <div className="right-part">
            {play ? (
              <Game
                showSelectedSquare={showSelectedSquare}
                size={size}
                userSquare={selectedSquare}
                playerHandler={playerHandler}
              />
            ) : (
              <Learn
                size={size}
                userSquare={selectedSquare}
                playerHandler={playerHandler}
              ></Learn>
            )}
          </div>
        )}
        {size >= 80 && window.innerWidth < 700 ? (
          <p className="warning">
            *Please, make the board a bit smaller to play or learn
          </p>
        ) : null}
      </div>
      <footer>
        <p>Tech Challenge - chessable</p>
        <p>Mathilde Congiu</p>
      </footer>
    </div>
  );
}

export default App;
