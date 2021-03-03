/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
    let counter = 1;
    let queue = [beginWord];
    const words = new Set(wordList);
    const visited = new Set(queue);

    while (queue.length) {
        const next = [];

        for (const currentWord of queue) {
            if (currentWord === endWord) {
                return counter;
            }

            const currentWordArr = currentWord.split('');

            for (let i = 0; i < currentWordArr.length; i++) {
                for (let letter = 0; letter < 26; letter++) {
                    currentWordArr[i] = String.fromCharCode(97 + letter);
                    const newWord = currentWordArr.join('');

                    if (!visited.has(newWord) && words.has(newWord)) {
                        next.push(newWord);
                        visited.add(newWord);
                    }

                    currentWordArr[i] = currentWord[i];
                }
            }
        }

        queue = next;
        counter++;
    }

    return 0;
};
