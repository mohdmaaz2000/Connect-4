import React from 'react'

const GameCircle = (props) => {
    const {id,circleClicked,className} = props;
  return (
    // if we want to pass the event we simply do it like this 
    <div className={`gameCircle ${className}`} onClick={() => {circleClicked(id)}}> 
    </div>
  )
}

export default GameCircle;
