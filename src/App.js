import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <h1>Board Sizer</h1>
      <Board />
      <Slider/>
    </div>
  );
}

export default App;
