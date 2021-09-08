// 848. Shifting Letters [Medium]
// https://leetcode.com/problems/shifting-letters/

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = (s, shifts) => {
    for (let i = shifts.length - 2; i >= 0; i--) {
        shifts[i] += shifts[i + 1];
    }

    return shifts
        .map((shift, idx) => String.fromCharCode(((s.charCodeAt(idx) - 97 + shift) % 26) + 97))
        .join('');
};
