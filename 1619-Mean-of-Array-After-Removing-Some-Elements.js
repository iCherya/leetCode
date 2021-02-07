/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = (arr) => {
    const len = arr.length;
    const trimLen = 0.05 * len;

    const result =
        arr
            .sort((a, b) => a - b)
            .slice(trimLen, len - trimLen)
            .reduce((acc, curr) => acc + curr, 0) /
        (len - trimLen * 2);

    return result.toFixed(5);
};
