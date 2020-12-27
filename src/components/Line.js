import React from 'react';

function Line(props) {
    let numbersArray = ["a","b" , "c","d" ,"e" , "f","g" ,"h" ];

    const showSelectedSquare = (selectedSquare) => {
    
      props.showSelectedSquare(selectedSquare)
    }

    return (
      <div className={`line`}>
        {props.lineDirection === "line-even" ? numbersArray.map((square, index) => {
          return index % 2 !== 0 ? (
            <div key= {index} className="square dark-square" onClick={e=> showSelectedSquare(`${square}${props.rank}`)}></div>
          ) : (
            <div key= {index} className="square light-square" onClick={e=> showSelectedSquare(`${square}${props.rank}`)}></div>
          );
        }): numbersArray.map((square, index) => {
          return index % 2 !== 0 ? (
            <div key= {index} className="square light-square" onClick={e=> showSelectedSquare(`${square}${props.rank}`)}></div>
          ) : (
            <div key= {index} className="square dark-square" onClick={e=> showSelectedSquare(`${square}${props.rank}`)}></div>
          );
        })}
      </div>)
}

export default Line
