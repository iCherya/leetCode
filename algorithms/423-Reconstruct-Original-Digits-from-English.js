/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = (s) => {
    const words = {
        z: 'zero',
        x: 'six',
        w: 'two',
        u: 'four',
        g: 'eight',
        s: 'seven',
        v: 'five',
        r: 'three',
        o: 'one',
        n: 'nine'
    };
    const nums = { z: 0, x: 6, w: 2, u: 4, g: 8, s: 7, v: 5, r: 3, o: 1, n: 9 };
    const order = 'zxwugsvron';
    const counts = {};

    for (const letter of s) {
        counts[letter] = (counts[letter] || 0) + 1;
    }

    const res = new Array(10);
    for (const key of order) {
        while (counts[key]) {
            for (const word of words[key]) {
                counts[word]--;
            }
            res[nums[key]] = (res[nums[key]] || '') + nums[key];
        }
    }

    return res.join('');
};
