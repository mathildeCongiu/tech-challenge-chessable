import React from 'react'
import Line from './Line';

export default function Board(props) {
    let columns = ["a","b","c","d","e","f","g","h"]
  return (
      
    <div className="board" style={{width: `${props.size}vw`, height:`${props.size}vw`}}>
        {columns.map((square, index) => {
            return (index % 2 === 0 ? <Line lineDirection= "line-odd"  /> : <Line lineDirection= "line-even" />)
        })}

      </div>
  );
}
