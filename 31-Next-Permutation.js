/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
    const swap = (i, j, arr) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    const reverseNext = (idx, arr) => {
        let start = idx;
        let end = arr.length - 1;

        while (start < end) {
            swap(start, end, arr);
            start++;
            end--;
        }
    };

    const nextLarge = (idx, arr) => {
        for (let i = arr.length - 1; i > idx; i--) {
            if (arr[i] > arr[idx]) return i;
        }
    };

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            const large = nextLarge(i, nums);
            swap(i, large, nums);
            reverseNext(i + 1, nums);

            return;
        }
    }

    nums.reverse();
};
