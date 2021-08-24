// 537. Complex Number Multiplication [Medium]
// https://leetcode.com/problems/complex-number-multiplication/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const complexNumberMultiply = (num1, num2) => {
    const [num1real, num1imaginary] = num1.split('+').map((el) => parseInt(el));
    const [num2real, num2imaginary] = num2.split('+').map((el) => parseInt(el));

    const real = num1real * num2real - num1imaginary * num2imaginary;
    const imaginary = num1real * num2imaginary + num1imaginary * num2real;

    return `${real}+${imaginary}i`;
};
