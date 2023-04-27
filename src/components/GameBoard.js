import React from 'react'
import GameCircle from '../GameCircle'

export default function GameBoard() {   
    const circleClicked = (id) =>
    {
        console.log('Cirlce Clicked : '+id);
    }
    return (
        <div className='gameBoard'>
            <GameCircle id={1} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={2} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={3} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={4} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={5} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={6} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={7} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={8} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={9} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={10} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={11} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={12} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={13} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={14} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={15} circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={16} circleClicked={circleClicked}>
            </GameCircle>
        </div>
    )
}
