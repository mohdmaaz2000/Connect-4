import React from 'react'

const GameCircle = (props) => {
    const {id,children,circleClicked} = props;
    const onClickEvent = (e,id,children) =>{
      circleClicked(id);
  }
  return (
    // if we want to pass the event we simply do it like this 
    <div className={`gameCircle ${id % 2 === 0 ? "even" :"odd"}`} onClick={(e)=> {onClickEvent(e,id,children)}}> 
      {children}
    </div>
  )
}

export default GameCircle;
