/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const hashS = {};
    const hashT = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (hashS[charS] === undefined) hashS[charS] = i;
        if (hashT[charT] === undefined) hashT[charT] = i;

        if (hashS[charS] !== hashT[charT]) return false;
    }

    return true;
};
