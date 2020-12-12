/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    const arr = s.trim().split(' ');

    if (arr[arr.length - 1]) {
        return arr[arr.length - 1].length;
    } else {
        return 0;
    }
};
