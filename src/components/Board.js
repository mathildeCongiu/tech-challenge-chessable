import React from 'react'
import Line from './Line';

export default function Board() {
    let columns = ["a","b","c","d","e","f","g","h"]
  return (
    <div className="board">
        {columns.map((square, index) => {
            return index % 2 === 0 ? <Line lineDirection= "line-even"/> : <Line lineDirection= "line-odd"/>
        })}

      </div>
  );
}
