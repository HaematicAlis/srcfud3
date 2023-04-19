import { handleKeyPress } from './gameFunctions.js';

export const reducer = (game, action) => {
    switch (action.type) {
        case 'handleKeyPress':
            return handleKeyPress(game, action.parameters.keyAction);
        default:
            throw new Error('Invalid Action Type: ' + JSON.stringify(action));
    }
}