import React from 'react';
import { GameContext } from '../../gameContext';
import { reducer } from '../../gameContext/reducer.js';
import { defaultGameState } from '../../gameContext/defaultGameState.js';
import { useKeyPressCallback } from '../../hooks/keyListenerHook.js';
import { handleKeyPress } from '../../gameContext/actions.js';
import './Home.css';

export const doHandleKeyPress = (game, dispatch, keyPressed) => {
    const keyAction = game?.keyBindings?.[game.currentMenu]?.[keyPressed] ?? '';
    if (keyAction) {
        dispatch(handleKeyPress(keyAction));
    }
};

const Home = () => {
    const innerContext = React.useReducer(reducer, defaultGameState);
    const [gameContextState, dispatch] = innerContext;

    useKeyPressCallback((event) => {
        doHandleKeyPress(gameContextState, dispatch, event.key);
    }, [dispatch]);

    return <>
        <GameContext.Provider value={innerContext}>
            <h1 className='xpText'>XP: {gameContextState.xp}</h1>
        </GameContext.Provider>
    </>;
};

export default Home;