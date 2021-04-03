/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    const map = new Map();
    let result = 0;

    for (const number of nums)
        if (number < k)
            if (map.get(k - number)) {
                map.set(k - number, map.get(k - number) - 1);
                result++;
            } else {
                map.set(number, (map.get(number) || 0) + 1);
            }

    return result;
};
