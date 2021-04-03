/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    const arr = s.trim().split(' ');

    return arr[arr.length - 1].length;
};
