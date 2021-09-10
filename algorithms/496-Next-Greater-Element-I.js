// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/ [Easy]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) =>
    nums1.map((num) => {
        const nextElementsArr = nums2.slice(nums2.indexOf(num));
        const greaterIdx = nextElementsArr.findIndex((el) => el > num);
        const greaterElement = nextElementsArr[greaterIdx];

        return greaterElement ? greaterElement : -1;
    });
