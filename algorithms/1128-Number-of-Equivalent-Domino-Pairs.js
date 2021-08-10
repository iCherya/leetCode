// 1128. Number of Equivalent Domino Pairs [Easy]
// https://leetcode.com/problems/number-of-equivalent-domino-pairs/

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = (dominoes) =>
    Object.values(
        dominoes
            .map((domino) => domino.sort((a, b) => a - b))
            .reduce((board, domino) => {
                const key = domino.join('-');
                if (!board[key]) board[key] = 0;
                board[key] += 1;
                return board;
            }, {})
    ).reduce((total, dominoOccurrences) => {
        const dominoPairs = (dominoOccurrences * (dominoOccurrences - 1)) / 2;
        return total + dominoPairs;
    }, 0);
