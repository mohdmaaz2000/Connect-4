import React from 'react'
const onClickEvent = (e,id,children) =>{
    alert('OnClick event fired with id :'+id +' children '+children);
}
const GameCircle = (props) => {
    const {id,children,color} = props;
  return (
    // if we want to pass the event we simply do it like this 
    <div style={{backgroundColor:color}} onClick={(e)=> {onClickEvent(e,id,children)}}> 
      {children}
    </div>
  )
}

export default GameCircle;
