// 567. Permutation in String [Medium]
// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    const s1Len = s1.length;
    const s2Len = s2.length;
    const window = s2Len - s1Len;
    const isEqual = (arr1, arr2) => arr1.join('') === arr2.join('');

    const s1Arr = new Array(26).fill(0);
    const s2Arr = new Array(26).fill(0);

    for (let i = 0; i < s1Len; i++) {
        s1Arr[s1.charCodeAt(i) - 97] += 1;
        s2Arr[s2.charCodeAt(i) - 97] += 1;
    }

    for (let i = 0; i <= window; i++) {
        if (isEqual(s1Arr, s2Arr)) return true;

        s2Arr[s2.charCodeAt(i) - 97] -= 1;
        s2Arr[s2.charCodeAt(i + s1Len) - 97] += 1;
    }

    return false;
};
