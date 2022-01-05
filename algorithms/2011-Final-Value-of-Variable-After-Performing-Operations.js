// 2011. Final Value of Variable After Performing Operations [Easy]
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations) =>
  operations.reduce((acc, curr) => {
    switch (curr) {
      case '++X':
        return acc + 1;
      case 'X++':
        return acc + 1;
      case '--X':
        return acc - 1;
      case 'X--':
        return acc - 1;
      default:
        return acc;
    }
  }, 0);
