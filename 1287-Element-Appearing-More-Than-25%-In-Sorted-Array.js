/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
    if (arr.length === 1) return arr[0];

    let l = 0;
    let r = 1;

    while (l < r) {
        if (4 * (r - l) > arr.length) return arr[l];

        if (arr[l] !== arr[r]) {
            l = r;
        }

        r++;
    }
};
