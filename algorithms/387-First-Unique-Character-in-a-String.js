/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const map = {};

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = {
                val: 0,
                idx: i
            };
        }

        map[s[i]].val++;
    }

    for (const el in map) {
        if (map[el].val === 1) return map[el].idx;
    }

    return -1;
};
