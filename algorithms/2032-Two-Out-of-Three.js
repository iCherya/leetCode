// 2032. Two Out of Three [Easy]
// https://leetcode.com/problems/two-out-of-three/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
  const set1 = Array.from(new Set(nums1));
  const set2 = Array.from(new Set(nums2));
  const set3 = Array.from(new Set(nums3));

  const map = {};

  [set1, set2, set3].forEach((arr, idx) => {
    arr.forEach((num) => {
      if (!map[num]) map[num] = { arr1: false, arr2: false, arr3: false };
      map[num][`arr${idx + 1}`] = true;
    });
  });

  return Object.entries(map)
    .filter(
      ([, { arr1, arr2, arr3 }]) =>
        [arr1, arr2, arr3].filter(Boolean).length >= 2,
    )
    .map(([num]) => +num);
};
