// 927. Three Equal Parts [Hard]
// https://leetcode.com/problems/three-equal-parts/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const threeEqualParts = (arr) => {
    const onesTotal = arr.filter((el) => el === 1).length;
    if (onesTotal === 0) return [0, 2];
    if (onesTotal % 3 !== 0) return [-1, -1];

    let onesNeedToFind = onesTotal / 3;
    let end = arr.length;

    while (onesNeedToFind > 0) {
        end -= 1;

        if (arr[end] === 1) {
            onesNeedToFind -= 1;
        }
    }

    const distance = arr.length - end;
    const left = arr.indexOf(1);
    const right = arr.indexOf(1, left + distance);

    for (let i = 0; i < distance; i++) {
        const target = arr[end + i];

        if (arr[i + left] !== target || arr[i + right] !== target) {
            return [-1, -1];
        }
    }

    return [left + distance - 1, right + distance];
};
