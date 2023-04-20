export const defaultGameState = {
    xp: 0,
    currentMenu: 'game',
    keyBindings: {
        'game': {
            'e': 'meleeAttack',
            'r': 'rangedAttack',
            't': 'magicAttack'
        }
    },
    enemies: [
        { id: 0, hp: 1, type: 'melee' },
        { id: 1, hp: 1, type: 'ranged' },
        { id: 2, hp: 1, type: 'magic' }
    ]
};