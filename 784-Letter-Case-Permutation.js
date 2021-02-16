/**
 * @param {string} string
 * @return {string[]}
 */
const letterCasePermutation = (string) => {
    const permutations = [];

    const dfs = (string, word, idx) => {
        if (word.length === string.length) {
            permutations.push(word);
            return;
        }

        if (isNaN(string[idx])) {
            dfs(string, word + string[idx].toUpperCase(), idx + 1);
            dfs(string, word + string[idx].toLowerCase(), idx + 1);
            return;
        }

        dfs(string, word + string[idx], idx + 1);
    };

    dfs(string, '', 0);

    return permutations;
};
