/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
    const missed = [];
    let max = arr[arr.length - 1];

    for (let i = 1; i < max; i++) {
        if (!arr.includes(i)) {
            missed.push(i);
        }
    }

    max++;

    while (missed.length < k) {
        missed.push(max);
        max++;
    }

    return missed[k - 1];
};
