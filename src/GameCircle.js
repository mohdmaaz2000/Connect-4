import React from 'react'
const onClickEvent = (e,id,children) =>{
    alert('OnClick event fired with id :'+id +' children '+children);
}
const GameCircle = (props) => {
    const {id,children} = props;
  return (
    // if we want to pass the event we simply do it like this 
    <div onClick={(e)=> {onClickEvent(e,id,children)}}> 
      GameCircle id: {id} {children}
    </div>
  )
}

export default GameCircle;
