import React, { useEffect, useState } from 'react'
import GameCircle from '../GameCircle'
import Header from './Header';
import Footer from './Footer';
import { helper, isDraw, suggestMove } from '../helper';

import {
    GAME_STATE_DRAW,
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

    useEffect(() =>{
        intitGame();
    },[]);

    const intitGame = () => {
        setBoard(Array(NO_CIRCLES).fill(PLAYER_0));
        setPlayerState(PLAYER_1);
        setGameState(GAME_STATE_PROGRESS);
        setWinPlayer(PLAYER_0);
    }

    // suggetsMove function
    const onClickSuggest = () =>{
        circleClicked(suggestMove(board));
    }

    // Function when the circle is clicked
    const circleClicked = (id) => {

        // if game is win then do nothing on other clicks
        if(gameState === GAME_STATE_WIN)
        {
            return;
        }

        // do not reClick the same circle
        if(board[id] !== 0)
        {
            return;
        }

        // checks if the game wins 
        if (helper(board, id, playerState)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(playerState);
        }

        // check if the game ends in a draw
        if(isDraw(board,id,playerState))
        {
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(PLAYER_0);
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
            <Footer onClickNewGame={intitGame} onClickSuggest={onClickSuggest}/>
        </>
    )
}
