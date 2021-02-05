/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = (S) => {
    const notLetters = [];
    const letters = [];

    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (!/[a-zA-Z]/.test(char)) {
            notLetters.push([char, i]);
        } else {
            letters.push(char);
        }
    }

    let result = letters.reverse().join('');

    for (const el of notLetters) {
        result = result.slice(0, el[1]) + el[0] + result.slice(el[1]);
    }

    return result;
};
