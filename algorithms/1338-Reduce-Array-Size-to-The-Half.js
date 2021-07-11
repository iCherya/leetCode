// 1338. Reduce Array Size to The Half [Medium]
// https://leetcode.com/problems/reduce-array-size-to-the-half/

/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = (arr) => {
    let result = 0;
    const halfSize = arr.length / 2;
    const map = {};

    for (const item of arr) {
        if (!map[item]) map[item] = 0;
        map[item] += 1;
    }

    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

    let sum = 0;
    for (const [, frequency] of sorted) {
        sum += frequency;
        result++;

        if (sum >= halfSize) break;
    }

    return result;
};
