/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = (A, B, C, D) => {
    const table = {};
    let counter = 0;

    for (const number1 of A) {
        for (const number2 of B) {
            const sum = number1 + number2;

            if (table[sum] === undefined) {
                table[sum] = 1;
            } else {
                table[sum]++;
            }
        }
    }

    for (const number1 of C) {
        for (const number2 of D) {
            const target = -(number1 + number2);

            if (table[target]) {
                counter += table[target];
            }
        }
    }

    return counter;
};
