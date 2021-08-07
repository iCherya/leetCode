// 1122. Relative Sort Array [Easy]
// https://leetcode.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
    const map = {};
    const sorted = [];

    arr1.forEach((number) => {
        if (!map[number]) map[number] = 0;
        map[number] += 1;
    });

    arr2.forEach((number) => {
        while (map[number]) {
            sorted.push(number);
            map[number] -= 1;
        }
    });

    const left = Object.entries(map)
        .filter(([, count]) => count > 0)
        .reduce((acc, [num, count]) => [...acc, ...new Array(count).fill(+num)], [])
        .sort((a, b) => a - b);

    return [...sorted, ...left];
};
