/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = (n, k) => {
    const array = [];

    let leftToRight = 1;
    let rightToLeft = n;

    while (leftToRight <= rightToLeft) {
        if (k <= 1 || k-- % 2) {
            array.push(leftToRight++);
        } else {
            array.push(rightToLeft--);
        }
    }

    return array;
};
