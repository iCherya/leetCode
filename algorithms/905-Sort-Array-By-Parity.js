/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) =>
    A.sort((a, b) => {
        if (a % 2 === 0) return -1;
        if (b % 2 === 1) return 1;
    });
