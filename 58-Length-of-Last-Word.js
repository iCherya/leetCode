/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    const arr = s.trim().split(' ');

    return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord(' '));
console.log(lengthOfLastWord('a '));
