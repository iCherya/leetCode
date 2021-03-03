/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    const [str1, str2] = [num1, num2].map((el) => el.split('').reverse().join(''));
    const len = num1.length > num2.length ? num1.length : num2.length;
    const result = [];
    let rest = 0;

    for (let i = 0; i < len; i++) {
        const sum = (+str1[i] || 0) + (+str2[i] || 0) + rest;
        rest = sum > 9 ? Math.floor(sum / 10) : 0;

        result.push(sum % 10);
    }

    if (rest !== 0) {
        result.push(rest);
    }

    return result.reverse().join('');
};
