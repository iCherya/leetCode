/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
    if (num1 === '0' || num2 === '0') return '0';

    const product = Array(num1.length + num2.length).fill(0);
    let last = product.length - 1;

    for (let i = num1.length - 1; i >= 0; i--) {
        let currIdx = last--;

        for (let j = num2.length - 1; j >= 0; j--) {
            const res = +num1[i] * +num2[j] + product[currIdx];
            product[currIdx] = res % 10;
            product[--currIdx] += Math.floor(res / 10);
        }
    }

    return product.join('').replace(/^0+/, '');
};
