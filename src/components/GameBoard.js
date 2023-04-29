import React, { useState } from 'react'
import GameCircle from '../GameCircle'
import Header from './Header';
import Footer from './Footer';
import { helper } from '../helper';

import {
    GAME_STATE_PROGRESS,
    GAME_STATE_WIN,
    NO_CIRCLES,
    PLAYER_0,
    PLAYER_1,
    PLAYER_2
} from '../Constants';


export default function GameBoard() {
    const [board, setBoard] = useState(Array(NO_CIRCLES).fill(PLAYER_0));
    const [playerState, setPlayerState] = useState(PLAYER_1);
    const [gameState,setGameState] = useState(GAME_STATE_PROGRESS);
    const [winPlayer,setWinPlayer] = useState(PLAYER_0);

    const circleClicked = (id) => {
        if(gameState === GAME_STATE_WIN)
        {
            return;
        }
        if(board[id] !== 0)
        {
            return;
        }
        if (helper(board, id, playerState)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(playerState);
        }
        setBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return playerState;
                return circle;
            });
        });
        setPlayerState(playerState === PLAYER_1 ? PLAYER_2 : PLAYER_1);
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
            <Header player={playerState} gameState={gameState} winPlayer={winPlayer}/>
            <div className='gameBoard'>
                {renderAllCircle()}

            </div>
            <Footer />
        </>
    )
}
