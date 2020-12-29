/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    const result = num % 9;

    if (result === 0) {
        if (num > 0) {
            return 9;
        }
    }

    return result;
};
