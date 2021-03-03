/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            result.push(nums2[j]);
            j++;
        } else {
            result.push(nums1[i]);
            i++;
        }
    }

    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }

    let median;
    if (result.length % 2 !== 0) {
        median = result[Math.floor(result.length / 2)];
    } else {
        console.log(result.length);
        const right = Math.floor(result.length / 2);
        const left = right - 1;

        median = (result[left] + result[right]) / 2;
    }

    return median;
};
