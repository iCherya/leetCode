/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = (arr1, arr2, d) => {
    let result = 0;

    main: for (const item1 of arr1) {
        for (const item2 of arr2) {
            if (Math.abs(item1 - item2) <= d) continue main;
        }
        result++;
    }

    return result;
};
