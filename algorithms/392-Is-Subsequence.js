/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
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
