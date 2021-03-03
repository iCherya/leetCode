/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
    const countSubArrSum = (arr, target) => {
        if (target === 0) return target;

        const map = new Map();
        map.set(0, -1);

        let accSum = 0;
        let maxDist = -1;
        for (let i = 0; i < arr.length; i++) {
            accSum += arr[i];

            if (map.has(accSum - target)) {
                maxDist = Math.max(maxDist, i - map.get(accSum - target));
            }
            map.set(accSum, i);
        }

        return maxDist;
    };

    const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
    const remain = totalSum - x;
    const count = countSubArrSum(nums, remain);

    if (count === -1) return count;
    return nums.length - count;
};
