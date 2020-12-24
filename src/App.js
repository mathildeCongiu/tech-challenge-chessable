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
      <Board size= {size}/>
      <DiscreteSlider valuetext = {valuetext}/>
    </div>
  );
}

export default App;
