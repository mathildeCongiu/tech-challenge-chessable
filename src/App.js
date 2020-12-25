import './App.css';
import Board from './components/Board';
import DiscreteSlider from './components/DiscreteSlider';
import React, {useState} from 'react';


function App() {
  const [size, setSize] = useState()
  const [toggleCoordinates, setToggleCoordinates] = useState("show")
  const [selectedSquare, setSelectedSquare] = useState()

  function valuetext(value) {
    setSize(value)
  return value;
  }

  const showSelectedSquare = (selectedSquare) => {
    setSelectedSquare(selectedSquare)
  }

  const toggleCoordinatesHandler = () => {
    if (toggleCoordinates === "show") {
      setToggleCoordinates("hide")
    }
    else {
      setToggleCoordinates("show")
    }
  }

  return (
    <div className="App">
      <h1>Board Sizer</h1>
      <div>
        <div className="nb-board" style={{height:`${size}vw`}}>
          <div className={`numbers ${toggleCoordinates}`} style={{height:"100%"}}>
            <p>8</p>
            <p>7</p>
            <p>6</p>
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
          <Board showSelectedSquare= {showSelectedSquare} size= {size}/>
        </div>
        <div className= {`coordinates ${toggleCoordinates}`}>
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
      <DiscreteSlider valuetext = {valuetext}/>
      {toggleCoordinates ==="show" ? <button onClick= {() => toggleCoordinatesHandler()}>Hide Coordinates</button> : <button onClick= {() => toggleCoordinatesHandler()}>Show Corrdinates</button>}
      <h2>{selectedSquare}</h2>
    </div>
  );
}

export default App;
