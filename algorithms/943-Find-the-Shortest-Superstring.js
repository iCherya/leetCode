/**
 * @param {string[]} words
 * @return {string}
 */
const shortestSuperstring = (words) => {
    const getAdditionalString = (a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (b.startsWith(a.slice(i))) {
                return b.slice(a.length - i);
            }
        }

        return b;
    };

    const dp = new Array(words.length)
        .fill(null)
        .map(() => new Array(2 ** words.length).fill(words.join('')));

    for (let s = 1; s < 2 ** words.length; s++) {
        for (let j = 0; j < words.length; j++) {
            if (!(s & (2 ** j))) continue;
            if (s === 2 ** j) dp[j][s] = words[j];

            const previousString = s ^ (2 ** j);
            for (let k = 0; k < words.length; k++) {
                if (previousString & (2 ** k)) {
                    const currentString = dp[k][previousString];
                    const tempString = currentString + getAdditionalString(currentString, words[j]);

                    if (tempString.length < dp[j][s].length) {
                        dp[j][s] = tempString;
                    }
                }
            }
        }
    }

    let minLength = Infinity;
    let minString = '';

    for (let i = 0; i < words.length; i++) {
        const cur = dp[i][2 ** words.length - 1];

        if (cur.length < minLength) {
            minLength = cur.length;
            minString = cur;
        }
    }

    return minString;
};
