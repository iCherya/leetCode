/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    let max = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        const temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp);
    }

    arr[arr.length - 1] = -1;

    return arr;
};
