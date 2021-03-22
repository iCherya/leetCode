/**
 * @param {string[]} wordList
 * @param {string[]} queries
 * @return {string[]}
 */
const spellchecker = (wordList, queries) => {
    const set = new Set();
    const map1 = new Map();
    const map2 = new Map();

    const removeVowels = (str) => {
        let replaced = '';

        str.split('').forEach((char) => {
            replaced += /[aeiou]/gi.test(char) ? '*' : char;
        });

        return replaced;
    };

    wordList.forEach((word) => {
        const wornInLowerCase = word.toLowerCase();
        const wordWithoutVowels = removeVowels(wornInLowerCase);

        set.add(word);
        if (!map1.has(wornInLowerCase)) map1.set(wornInLowerCase, word);
        if (!map2.has(wordWithoutVowels)) map2.set(wordWithoutVowels, word);
    });

    const result = [];

    queries.forEach((query) => {
        const wornInLowerCase = query.toLowerCase();
        const wordWithoutVowels = removeVowels(wornInLowerCase);

        if (set.has(query)) result.push(query);
        else if (map1.has(wornInLowerCase)) result.push(map1.get(wornInLowerCase));
        else if (map2.has(wordWithoutVowels)) result.push(map2.get(wordWithoutVowels));
        else result.push('');
    });

    return result;
};
