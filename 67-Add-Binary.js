/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let carry = 0;
    let result = [];

    if (a === '0') return b;
    if (b === '0') return a;

    let pointer1 = a.length - 1;
    let pointer2 = b.length - 1;

    while (pointer1 >= 0 || pointer2 >= 0) {
        let A = pointer1 >= 0 ? a[pointer1--] : 0;
        let B = pointer2 >= 0 ? b[pointer2--] : 0;

        let sum = parseInt(A) + parseInt(B) + carry;
        if (sum == 3) {
            result.unshift(1);
            carry = 1;
        } else if (sum == 2) {
            result.unshift(0);
            carry = 1;
        } else if (sum == 1) {
            result.unshift(1);
            carry = 0;
        } else if (sum == 0) {
            result.unshift(0);
            carry = 0;
        }
    }

    if (carry > 0) {
        result.unshift(1);
    }

    return result.join('');
};

const a =
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
const b =
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';
console.log(addBinary(a, b));
