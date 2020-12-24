import React from 'react'

function Line(props) {
    let numbersArray = ["a","b" , "c","d" ,"e" , "f","g" ,"h" ];
    console.log(props)
    return (
      <div className={`line ${props.lineDirection}`}>
        {numbersArray.map((square, index) => {
          return index % 2 !== 0 ? (
            <div className="square light-square"></div>
          ) : (
            <div className="square dark-square"></div>
          );
        })}
      </div>)
}

export default Line
