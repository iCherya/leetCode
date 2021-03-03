/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = (encoded) => {
    let len = encoded.length + 1;

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

console.log(decode([3, 1])); // [1,2,3]
console.log(decode([6, 5, 4, 6])); //[2,4,1,5,3]
