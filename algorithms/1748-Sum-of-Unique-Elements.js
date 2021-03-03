/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
    const map = {};

    for (const num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }

    return Object.entries(map)
        .filter((el) => el[1] < 2)
        .reduce((acc, curr) => acc + +curr[0], 0);
};
