import { attack } from './gameFunctions.js';

export const reducer = (game, action) => {
    switch (action.type) {
        case 'meleeAttack':
            return attack(game, 'melee');
        case 'rangedAttack':
            return attack(game, 'ranged');
        case 'magicAttack':
            return attack(game, 'magic');
        default:
            throw new Error('Invalid Action Type: ' + JSON.stringify(action));
    }
}