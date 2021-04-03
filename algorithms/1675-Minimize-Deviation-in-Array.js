/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = (nums) => {
    const swap = (i, j, arr) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const maxHeapSort = (arr, parent) => {
        let left = parent * 2 + 1;

        while (left < arr.length) {
            let maxChild = left;
            const right = left + 1;

            if (right < arr.length && arr[right] > arr[left]) {
                maxChild = right;
            }
            if (arr[maxChild] <= arr[parent]) {
                return;
            }

            swap(parent, maxChild, nums);
            parent = maxChild;
            left = parent * 2 + 1;
        }
    };

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) nums[i] *= 2;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        maxHeapSort(nums, i);
    }

    let min = Math.min(...nums);
    let max = nums[0];
    let result = max - min;

    while (max % 2 === 0) {
        max /= 2;
        min = Math.min(max, min);
        nums[0] = max;
        maxHeapSort(nums, 0);
        max = nums[0];
        result = Math.min(result, max - min);
    }

    return result;
};
