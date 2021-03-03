/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    const [firstNumber, lastNumber] = [1, 1];
    let result = [firstNumber];

    let i = 1;
    while (i <= rowIndex) {
        const nextLevel = [firstNumber];

        for (let j = 0; j < result.length - 1; j++) {
            nextLevel.push(result[j] + result[j + 1]);
        }

        nextLevel.push(lastNumber);
        result = nextLevel;
        i++;
    }

    return result;
};
