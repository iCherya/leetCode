// 1550. Three Consecutive Odds [Easy]
// https://leetcode.com/problems/three-consecutive-odds/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = (arr) => {
    let count = 0;

    for (const number of arr) {
        if (number % 2) count += 1;
        else count = 0;

        if (count === 3) return true;
    }

    return false;
};
