// 1534. Count Good Triplets [Easy]
// https://leetcode.com/problems/count-good-triplets/

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = (arr, a, b, c) => {
    let triplets = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[k] - arr[i]) <= c
                ) {
                    triplets++;
                }
            }
        }
    }

    return triplets;
};
