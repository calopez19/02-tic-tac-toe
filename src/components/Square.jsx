import React from "react";
import '../sheets-style/square.css'

export function Square({children, updateBoard, index, isSelected}) {

  const handleClick = (index) => {
    updateBoard(index)
  }
    return (
        <>
            <div className={`square ${isSelected? 'selected': ''}`} key={index} onClick={() => handleClick(index)}>
                <span className='cell__content'>
                  {children}
                </span>
              </div>
        </>
    )
}