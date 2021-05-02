class WordFilter {
    /**
     * @param {string[]} words
     */
    constructor(words) {
        this.wordMap = new Map();

        words.forEach((word, index) => {
            for (let prefixEnd = 0; prefixEnd < word.length; prefixEnd++) {
                const prefix = word.substring(0, prefixEnd + 1);

                for (let suffixStart = 0; suffixStart < word.length; suffixStart++) {
                    const suffix = word.substring(suffixStart);

                    this.wordMap.set(`${prefix}-${suffix}`, index);
                }
            }
        });
    }

    /**
     * @param {string} prefix
     * @param {string} suffix
     * @return {number}
     */
    f(prefix, suffix) {
        const key = `${prefix}-${suffix}`;

        return this.wordMap.has(key) ? this.wordMap.get(key) : -1;
    }
}
