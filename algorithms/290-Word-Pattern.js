/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const patternArr = pattern.split('');
    const sArr = s.split(' ');
    if (patternArr.length !== sArr.length) return false;

    const mapLetter = {};
    const mapWord = {};

    for (let i = 0; i < pattern.length; i++) {
        const letter = patternArr[i];
        const word = sArr[i];

        if (!mapLetter[letter]) mapLetter[letter] = word;
        else if (mapLetter[letter] !== word) return false;
        if (!mapWord[word]) mapWord[word] = letter;
        else if (mapWord[word] !== letter) return false;
    }

    return true;
};
