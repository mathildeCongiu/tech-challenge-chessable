import React from 'react'

function Line(props) {
    let numbersArray = ["","" , "","" ,"" , "","" ,"" ];
    console.log(props)
    return (
      <div className={`line ${props.lineDirection}`}>
        {numbersArray.map((square, index) => {
          return index % 2 !== 0 ? (
            <div className="square light-square">{square}</div>
          ) : (
            <div className="square dark-square">{square}</div>
          );
        })}
      </div>)
}

export default Line
