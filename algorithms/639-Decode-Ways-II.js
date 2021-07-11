// 639. Decode Ways II [Hard]
// https://leetcode.com/problems/decode-ways-ii/

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
    let endingAny = 1,
        ending1 = 0,
        ending2 = 0,
        currentEndingAny = 0;

    for (const char of s) {
        if (char === '*') {
            currentEndingAny = 9 * endingAny + 9 * ending1 + 6 * ending2;
            ending1 = endingAny;
            ending2 = endingAny;
        } else {
            currentEndingAny = (char > '0') * endingAny + ending1 + (char <= '6') * ending2;
            ending1 = (char === '1') * endingAny;
            ending2 = (char === '2') * endingAny;
        }
        endingAny = currentEndingAny % (10 ** 9 + 7);
    }

    return endingAny;
};
