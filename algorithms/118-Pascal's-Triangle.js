/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    if (numRows === 0) return [];

    const [firstNumber, lastNumber] = [1, 1];
    const result = [[firstNumber]];

    while (result.length < numRows) {
        const nextLevel = [firstNumber];
        const prevLevel = result[result.length - 1];

        for (let i = 0; i < prevLevel.length - 1; i++) {
            nextLevel.push(prevLevel[i] + prevLevel[i + 1]);
        }

        nextLevel.push(lastNumber);
        result.push(nextLevel);
    }

    return result;
};
