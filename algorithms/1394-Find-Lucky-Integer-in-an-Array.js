// 1394. Find Lucky Integer in an Array [Easy]
// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = (arr) => {
    const frequencyMap = {};

    for (const number of arr) {
        if (!frequencyMap[number]) frequencyMap[number] = 0;
        frequencyMap[number] += 1;
    }

    const luckyIntegers = Object.entries(frequencyMap)
        .sort((a, b) => b[1] - a[1])
        .filter(([number, frequency]) => +number === frequency);

    return luckyIntegers.length ? +luckyIntegers[0][0] : -1;
};
