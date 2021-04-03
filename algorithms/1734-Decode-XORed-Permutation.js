/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = (encoded) => {
    const len = encoded.length + 1;

    let xorAll = 0;
    let xorAdj = 0;

    for (let i = 1; i < len + 1; i++) {
        xorAll ^= i;
    }

    for (let i = 0; i < len - 1; i += 2) {
        xorAdj ^= encoded[i];
    }

    let lastEl = xorAll ^ xorAdj;
    const result = [lastEl];

    for (let i = len - 2; i >= 0; i--) {
        lastEl = encoded[i] ^ lastEl;
        result.push(lastEl);
    }

    return result.reverse();
};
