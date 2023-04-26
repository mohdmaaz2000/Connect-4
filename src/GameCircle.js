import React from 'react'

const GameCircle = (props) => {
    const onClickEvent = () =>{
        alert('OnClick event fired');
    }
  return (
    <div onClick={onClickEvent}>
      GameCircle id: {props.id} {props.children}
      
    </div>
  )
}

export default GameCircle;
