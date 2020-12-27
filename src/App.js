import "./App.css";
import Board from "./components/Board";
import DiscreteSlider from "./components/DiscreteSlider";
import React, { useState} from "react";
import Game from "./components/Game";
import Learn from "./components/Learn";

function App() {
  const [size, setSize] = useState();
  const [toggleCoordinates, setToggleCoordinates] = useState("show");
  const [selectedSquare, setSelectedSquare] = useState();
  const [play, setPlay] = useState(false);

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
    setPlay(bool)
  }

  return (
    <div className="App">
      <nav>
        <li onClick= {() => setPlay(false)}> Discover</li>
        <li onClick= {() => setPlay(true)}>Play</li>
      </nav>
      <h1>Play my board!</h1>
      <div className="full-content">
        <div className="main-container">
          {size < 10 ? (
            <p className= "error-message">
              Oups, it seems too small, make the board bigger by using the
              slider.
            </p>
          ) : (
            <div className="full-board">
              <div className="nb-board" style={{ height: `${size}vw` }}>
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
                <Board showSelectedSquare={showSelectedSquare} size={size} />
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
              Show Corrdinates
            </button>
          )}

          <DiscreteSlider valuetext={valuetext} />
        </div>
        {size >= 80 || size <10 ? null :  
        <div className= "right-part">
        {play ?  <Game showSelectedSquare={showSelectedSquare} size= {size} userSquare={selectedSquare} playerHandler= {playerHandler}/> :         
        <Learn size= {size} userSquare={selectedSquare} playerHandler= {playerHandler}></Learn>}
        </div>}
      </div>
      <footer>
        <p>Tech Challenge - chessable</p>
        <p>Mathilde Congiu</p>
      </footer>
    </div>
  );
}

export default App;
