/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const temp = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            temp.push(s[i]);
        }
    }

    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            result += temp.pop();
        } else {
            result += s[i];
        }
    }

    return result;
};
