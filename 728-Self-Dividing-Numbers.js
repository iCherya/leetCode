/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
    const result = [];

    main: for (let i = left; i <= right; i++) {
        const numDigits = i.toString().split('').map(Number);

        for (const digit of numDigits) {
            if (digit === 0 || i % digit !== 0) continue main;
        }

        result.push(i);
    }

    return result;
};
