/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = (encoded, first) => {
    const result = [first];

    for (let i = 0; i < encoded.length; i++) {
        result.push((first ^= encoded[i]));
    }

    return result;
};
