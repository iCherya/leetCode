// 135. Candy [Hard]
// https://leetcode.com/problems/candy/

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
    const len = ratings.length;
    const result = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) result[i] = result[i - 1] + 1;
    }

    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && result[i] <= result[i + 1])
            result[i] = result[i + 1] + 1;
    }

    return result.reduce((acc, curr) => acc + curr, 0);
};
