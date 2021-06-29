// 1881. Maximum Value after Insertion [Medium]
// https://leetcode.com/problems/maximum-value-after-insertion/

/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
const maxValue = (n, x) => {
    const isNegative = n[0] === '-';
    x = x.toString();

    if (isNegative) {
        n = n.slice(1);

        for (let i = 0; i < n.length; i++) {
            if (x < n[i]) {
                return `-${n.slice(0, i)}${x}${n.slice(i)}`;
            }
        }

        return `-${n}${x}`;
    } else {
        for (let i = 0; i < n.length; i++) {
            if (x > n[i]) {
                return `${n.slice(0, i)}${x}${n.slice(i)}`;
            }
        }

        return `${n}${x}`;
    }
};
