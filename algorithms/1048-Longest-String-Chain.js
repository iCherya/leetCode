/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = (words) => {
    words.sort((a, b) => a.length - b.length);

    const map = {};
    let longest = 0;

    for (const word of words) {
        let currentLongest = 0;

        for (let i = 0; i < word.length; i++) {
            const prevWord = word.slice(0, i) + word.slice(i + 1);

            if (!map[prevWord]) map[prevWord] = 0;

            currentLongest = Math.max(currentLongest, map[prevWord] + 1);
        }

        map[word] = currentLongest;
        longest = Math.max(longest, currentLongest);
    }

    return longest;
};
