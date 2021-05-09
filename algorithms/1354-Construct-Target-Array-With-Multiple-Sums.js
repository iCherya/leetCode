/* eslint-disable no-constant-condition */
/**
 * @param {number[]} target
 * @return {boolean}
 */
const isPossible = (target) => {
    while (true) {
        let sum = target.reduce((acc, curr) => acc + curr);
        if (sum === target.length) return true;

        let largestValue = -Infinity;
        let largestIdx;

        target.forEach((value, idx) => {
            if (value > largestValue) {
                largestValue = value;
                largestIdx = idx;
            }
        });

        sum -= largestValue;
        if (largestValue <= sum || 0 === sum) return false;

        target[largestIdx] = largestValue - sum * ((largestValue / sum) | 0) || sum;
    }
};
