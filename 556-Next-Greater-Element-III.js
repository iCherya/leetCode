/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = (n) => {
    const max32bitInteger = 2147483647;
    const string = n.toString();
    let j = string.length - 1;
    let i = j - 1;

    while (string[i + 1] <= string[i]) {
        i--;
    }

    if (i === -1) {
        return -1;
    }

    while (string[j] <= string[i]) {
        j--;
    }

    let right = string.slice(i + 1, j) + string[i] + string.slice(j + 1);
    const res = Number(string.slice(0, i) + string[j] + right.split('').reverse().join(''));
    return res < max32bitInteger ? res : -1;
};
