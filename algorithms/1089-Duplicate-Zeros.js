/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.length = len;
            i++;
        }
    }
};
