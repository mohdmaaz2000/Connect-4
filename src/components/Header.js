import React from 'react'
import {
  GAME_STATE_PROGRESS,
  GAME_STATE_WIN
} from '../Constants'
const Header = (props) => {

  const {player,gameState,winPlayer} = props;
  const renderHeader = () =>{
    if(gameState === GAME_STATE_PROGRESS)
    {
      return (<div className='panel header'>
        Player {player} Turn
      </div>)
    }

    if(gameState === GAME_STATE_WIN)
    {
      return (
        <div className='panel header'>
          Player {winPlayer} wins
        </div>
      )
    }

  }
  return (
    <>
    {renderHeader()}
    </>
    
  )
}

export default Header
