// 796. Rotate String [Easy]
// https://leetcode.com/problems/rotate-string/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
    if (s.length !== goal.length) return false;
    if (s === '') return true;

    const initial = s;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        s = s.slice(1) + s[0];

        if (s === goal) return true;
        if (s === initial) return false;
    }
};
