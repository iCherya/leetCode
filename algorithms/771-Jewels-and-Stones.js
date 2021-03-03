/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    let jewelsCounter = 0;

    for (const stone of stones) {
        if (jewels.includes(stone)) jewelsCounter++;
    }

    return jewelsCounter;
};
