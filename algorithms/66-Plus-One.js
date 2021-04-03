/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] > 9) {
            if (i < 1) {
                digits.unshift(1);
                digits[i + 1] = 0;
            } else {
                digits[i] = 0;
            }
        } else {
            break;
        }
    }

    return digits;
};
