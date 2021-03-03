/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */

const shortestToChar = (S, C) => {
    const distance = new Array(S.length).fill(Infinity);

    let pointer = -Infinity;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            pointer = i;
        }
        distance[i] = Math.min(distance[i], Math.abs(i - pointer));
    }

    for (let i = S.length - 1; i >= 0; i--) {
        if (S[i] === C) {
            pointer = i;
        }
        distance[i] = Math.min(distance[i], Math.abs(i - pointer));
    }

    return distance;
};
