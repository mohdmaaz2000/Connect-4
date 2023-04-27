import React from 'react'

const GameCircle = (props) => {
    const {id,children,circleClicked} = props;
  return (
    // if we want to pass the event we simply do it like this 
    <div className={`gameCircle ${id % 2 === 0 ? "even" :"odd"}`} onClick={() => {circleClicked(id)}}> 
      {children}
    </div>
  )
}

export default GameCircle;
