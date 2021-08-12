// 954. Array of Doubled Pairs [Medium]
// https://leetcode.com/problems/array-of-doubled-pairs/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canReorderDoubled = (arr) => {
    const frequency = {};

    arr.forEach((number) => {
        if (!frequency[number]) frequency[number] = 0;
        frequency[number] += 1;
    });

    arr.sort((a, b) => a - b);

    arr.forEach((number) => {
        if (frequency[number] && frequency[number * 2]) {
            frequency[number] -= 1;
            frequency[number * 2] -= 1;
        }
    });

    for (const key in frequency) {
        if (frequency[key]) return false;
    }

    return true;
};
