// 838. Push Dominoes [Medium]
// https://leetcode.com/problems/push-dominoes/

/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = (dominoes) => {
    const dominoesArray = dominoes.split('');
    const len = dominoesArray.length;
    const forces = new Array(len).fill(0);
    let force = 0;

    for (let i = 0; i < len; i++) {
        const currentDomino = dominoesArray[i];

        if (currentDomino === 'R') force = len;
        else if (currentDomino === 'L') force = 0;
        else force = Math.max(force - 1, 0);

        forces[i] += force;
    }

    for (let i = len - 1; i >= 0; i--) {
        const currentDomino = dominoesArray[i];

        if (currentDomino === 'L') force = len;
        else if (currentDomino === 'R') force = 0;
        else force = Math.max(force - 1, 0);

        forces[i] -= force;
    }

    return forces
        .map((force) => {
            if (force < 0) return 'L';
            if (force > 0) return 'R';
            return '.';
        })
        .join('');
};
