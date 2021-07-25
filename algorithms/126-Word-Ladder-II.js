// 126. Word Ladder II [Hard]
// https://leetcode.com/problems/word-ladder-ii/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
    const words = new Set(wordList);
    const visited = new Set();
    let queue = new Map();
    queue.set(beginWord, [[beginWord]]);

    while (queue.size) {
        const next = new Map();

        for (const word of queue.keys()) {
            if (word === endWord) {
                return queue.get(word);
            }

            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const newWord =
                        word.substring(0, i) + String.fromCharCode(97 + j) + word.substring(i + 1);

                    if (words.has(newWord) && !visited.has(newWord)) {
                        if (!next.has(newWord)) next.set(newWord, []);

                        for (const path of queue.get(word)) {
                            next.get(newWord).push([...path, newWord]);
                        }

                        visited.add(word);
                    }
                }
            }
        }

        queue = next;
    }

    return [];
};
