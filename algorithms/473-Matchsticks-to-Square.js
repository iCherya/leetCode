// 473. Matchsticks to Square
// https://leetcode.com/problems/matchsticks-to-square/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = (matchsticks) => {
    const matchsticksSum = matchsticks.reduce((acc, curr) => acc + curr, 0);
    if (matchsticksSum === 0 || matchsticksSum % 4 !== 0) return false;

    matchsticks.sort((a, b) => b - a);

    const helper = (matchsticks, currentLength) => {
        if (!currentLength) return true;

        for (let i = 0; i < matchsticks.length; i++) {
            if (matchsticks[i] > currentLength) return false;

            if (matchsticks[i] > 0) {
                matchsticks[i] *= -1;

                if (helper(matchsticks, currentLength - Math.abs(matchsticks[i]))) return true;

                matchsticks[i] *= -1;
            }
        }

        return false;
    };

    for (let i = 0; i < 3; i++) {
        if (!helper(matchsticks, matchsticksSum / 4)) return false;
    }

    return true;
};
