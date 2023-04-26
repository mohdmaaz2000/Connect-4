import React from 'react'
const onClickEvent = (e,id,children) =>{
    alert('OnClick event fired with id :'+id +' children '+children);
}
const GameCircle = (props) => {
    const {id,children,color} = props;
    const style = {
        backgroundColor:color,
        margin:10,
        width:75,
        height:75,
        borderRadius:'50%',
        border:'2px solid black'
    }
  return (
    // if we want to pass the event we simply do it like this 
    <div style={style} onClick={(e)=> {onClickEvent(e,id,children)}}> 
      {children}
    </div>
  )
}

export default GameCircle;
