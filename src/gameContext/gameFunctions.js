import { enemyTypesEnum } from './constants.js';

export const attack = (game, attackType) => {
    const enemy = game.enemies[0] ?? '';
    if (!enemy) return game;

    if (attackType === enemy.type) {
        const newEnemies = game.enemies.filter((e) => e.id !== enemy.id);
        if (newEnemies.length < 1) {
            return respawn(game);
        } else {
            return { ...game, enemies: game.enemies.filter((e) => e.id !== enemy.id)};
        }
    } else {
        return game;
    }
};

export const respawn = (game) => {
    const type1 = enemyTypesEnum[Math.floor(Math.random() * 3)]; 
    const type2 = enemyTypesEnum[Math.floor(Math.random() * 3)];
    const type3 = enemyTypesEnum[Math.floor(Math.random() * 3)];
    const enemies = [
        { id: 0, hp: 1, type: type1 },
        { id: 1, hp: 1, type: type2 },
        { id: 2, hp: 1, type: type3 }
    ];
    return { ...game, enemies: enemies, xp: game.xp + 1 };
};