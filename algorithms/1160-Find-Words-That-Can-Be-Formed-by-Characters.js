// 1160. Find Words That Can Be Formed by Characters [Easy]
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
    const map = {};
    let count = 0;

    for (const char of chars) {
        if (!map[char]) map[char] = 0;
        map[char] += 1;
    }

    main: for (const word of words) {
        const currMap = { ...map };
        const currWord = word.split('');

        for (const char of currWord) {
            if (currMap[char] < 0 || !currMap[char]) continue main;
            currMap[char] -= 1;
        }

        count += word.length;
    }

    return count;
};
