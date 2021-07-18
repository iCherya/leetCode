// 1013. Partition Array Into Three Parts With Equal Sum [Easy]
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = (arr) => {
    const total = arr.reduce((acc, curr) => acc + curr, 0);

    if (total % 3 !== 0) return false;

    const target = total / 3;
    let partsToFind = 3;
    let current = 0;

    for (const number of arr) {
        current += number;

        if (current === target) {
            partsToFind -= 1;
            current = 0;
        }
        if (partsToFind === 0) return true;
    }

    return false;
};
