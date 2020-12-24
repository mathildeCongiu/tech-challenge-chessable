import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import DiscreteSlider from './components/DiscreteSlider';
import React, {useState} from 'react';


function App() {
  const [size, setSize] = useState()

  function valuetext(value) {
    setSize(value)
  return value;
  }

  return (
    <div className="App">
      <h1>Board Sizer</h1>
      <div>
        <div className="nb-board" style={{height:`${size}vw`}}>
          <div className="numbers" style={{height:"100%"}}>
            <p>8</p>
            <p>7</p>
            <p>6</p>
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
          <Board size= {size}/>
        </div>
        <div className= "coordinates">
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
    </div>
  );
}

export default App;
