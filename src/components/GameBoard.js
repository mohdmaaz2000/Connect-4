import React, { useState } from 'react'
import GameCircle from '../GameCircle'

export default function GameBoard() {   
    const [board,setBoard] = useState(Array(16).fill(0));
    const circleClicked = (id) =>
    {
        console.log('Cirlce Clicked : '+id);
        board[id - 1] = 1;
        setBoard(board);
        console.log(board);
    }
    return (
        <div className='gameBoard'>
            <GameCircle id={1} className='player_0' circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={2} className='player_1' circleClicked={circleClicked}>
            </GameCircle>
            <GameCircle id={3} className='player_2' circleClicked={circleClicked}>
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
