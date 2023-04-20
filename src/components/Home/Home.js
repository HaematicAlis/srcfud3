import React from 'react';
import Enemy from './Enemy/Enemy.js';
import { GameContext } from '../../gameContext';
import { reducer } from '../../gameContext/reducer.js';
import { defaultGameState } from '../../gameContext/defaultGameState.js';
import { useKeyPressCallback } from '../../hooks/keyListenerHook.js';
import './Home.css';

export const doHandleKeyPress = (game, dispatch, keyPressed) => {
    const keyAction = game?.keyBindings?.[game.currentMenu]?.[keyPressed] ?? '';
    if (keyAction) {
        dispatch({ type: keyAction, parameters: {} });
    }
};

const Home = () => {
    const innerContext = React.useReducer(reducer, defaultGameState);
    const [game, dispatch] = innerContext;

    useKeyPressCallback((event) => {
        doHandleKeyPress(game, dispatch, event.key);
    }, [dispatch]);

    return <>
        <GameContext.Provider value={innerContext}>
            <h1 className='xpText'>XP: {game.xp}</h1>

            {game.enemies.map((enemy) => (
                <Enemy key={enemy.id} enemy={enemy} />
            ))}
        </GameContext.Provider>
    </>;
};

export default Home;