// 932. Beautiful Array [Medium]
// https://leetcode.com/problems/beautiful-array/

/**
 * @param {number} n
 * @return {number[]}
 */
const beautifulArray = (n) => {
    let result = [1];

    while (result.length < n) {
        const odd = [];
        const even = [];

        result.forEach((num) => {
            const evenCandidate = num * 2 - 1;
            const oddCandidate = num * 2;

            if (evenCandidate <= n) even.push(evenCandidate);
            if (oddCandidate <= n) odd.push(oddCandidate);
        });

        result = [...even, ...odd];
    }

    return result;
};
