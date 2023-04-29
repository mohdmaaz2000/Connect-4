import React, { useState } from 'react'
import GameCircle from '../GameCircle'
import Header from './Header';
import Footer from './Footer';
import { helper } from '../helper';
const PLAYER_0 = 0;
const NO_CIRCLES = 16;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
export default function GameBoard() {
    const [board, setBoard] = useState(Array(NO_CIRCLES).fill(PLAYER_0));
    const [playerState, setPlayerState] = useState(PLAYER_1);

    const circleClicked = (id) => {
        console.log('Cirlce Clicked : ' + id);
        if (helper(board, id, playerState)) 
        { 
            console.log("Player wins"); 
        }
        setBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return playerState;
                return circle;
            });
        });
        setPlayerState(playerState === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        console.log(board);
        console.log(playerState);
    }

    const renderAllCircle = () => {
        let circles = [];
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }
    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${board[id]}`} circleClicked={circleClicked} />
    }
    return (
        <>
            <Header player={playerState} />
            <div className='gameBoard'>
                {renderAllCircle()}

            </div>
            <Footer />
        </>
    )
}
