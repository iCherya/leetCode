/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = (cardPoints, k) => {
    let total = 0;

    for (let i = 0; i < k; i++) {
        total += cardPoints[i];
    }

    let maximum = total;

    for (let i = k - 1, j = cardPoints.length - 1; i >= 0; i--, j--) {
        total += cardPoints[j] - cardPoints[i];
        maximum = Math.max(maximum, total);
    }

    return maximum;
};
