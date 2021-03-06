/**
 * @param {string} s
 * @return {number}
 */
const beautySum = (s) => {
    let sum = 0;

    for (let i = 0; i < s.length; i += 1) {
        const map = {};

        for (let j = i; j < s.length; j += 1) {
            if (!map[s[j]]) map[s[j]] = 0;
            map[s[j]] += 1;

            let max = -Infinity;
            let min = Infinity;

            for (const item in map) {
                if (map[item] > max) max = map[item];
                if (map[item] < min) min = map[item];
            }

            sum += max - min;
        }
    }

    return sum;
};
