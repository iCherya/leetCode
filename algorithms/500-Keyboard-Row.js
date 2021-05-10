/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
    const keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const result = [];

    for (const word of words) {
        const letters = word.split('').map((letter) => letter.toLocaleLowerCase());
        const firstLetter = letters[0];
        const idx = keyboard.findIndex((el) => el.includes(firstLetter));
        const rowCandidate = keyboard[idx];

        if (letters.every((el) => rowCandidate.includes(el))) {
            result.push(word);
        }
    }

    return result;
};
