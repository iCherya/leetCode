// 792. Number of Matching Subsequences [Medium]
// https://leetcode.com/problems/number-of-matching-subsequences/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (s, words) => {
    const isSubsequence = (s, t) => {
        if (s.length === 0) return true;

        let sPointer = 0;
        let tPointer = 0;

        while (tPointer < t.length) {
            if (t.charAt(tPointer) === s.charAt(sPointer)) {
                sPointer++;
                if (sPointer === s.length) return true;
            }

            tPointer++;
        }

        return false;
    };

    return words.filter((word) => isSubsequence(word, s)).length;
};
