/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
const brokenCalc = (X, Y) => {
    let result = 0;

    while (Y > X) {
        if (Y % 2 === 1) {
            Y++;
        } else {
            Y /= 2;
        }

        result++;
    }

    return result + X - Y;
};
