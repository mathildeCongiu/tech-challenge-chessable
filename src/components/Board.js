import React from 'react';
import Line from './Line';

export default function Board(props) {
    let columns = ["8","7","6","5","4","3","2","1"]

  return (
      
    <div className="board" style={{width: `${props.size}${props.unit}`, height:`${props.size}${props.unit}`}}>
        {columns.map((square, index) => {
     
            return (index % 2 === 0 ? <Line key= {index} {...props} lineDirection= "line-even"  rank= {square} /> : <Line lineDirection="line-odd" {...props} key= {index} rank= {square}/>)
        })}

      </div>
  );
}
