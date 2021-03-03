/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
    const result = new Array(s.length).fill(null);

    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
};
