export const keyActionMap = {
    'attack': game => attack(game),
};

export const handleKeyPress = (game, keyAction) => {
    return keyActionMap[keyAction](game);
};

export const attack = (game) => {
    return { ...game, xp: game.xp + 1 };
}