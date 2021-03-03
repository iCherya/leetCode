/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
    const map = {};

    for (const num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }

    return Object.entries(map)
        .sort((a, b) => {
            if (a[1] === b[1]) return +b[0] - +a[0];

            return a[1] - b[1];
        })
        .map((el) => {
            const [value, quantity] = el;
            return new Array(quantity).fill(+value);
        })
        .flat();
};
