// 1935. Maximum Number of Words You Can Type [Easy]
// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = (text, brokenLetters) => {
    let result = 0;
    const words = text.split(' ');

    main: for (const word of words) {
        for (const letter of brokenLetters) {
            if (word.includes(letter)) continue main;
        }

        result += 1;
    }

    return result;
};
