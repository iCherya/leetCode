/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = (s, k) => {
    const maxDecimal = parseInt('1'.repeat(k), 2);

    for (let i = 0; i <= maxDecimal; i += 1) {
        const candidate = i.toString(2).padStart(k, '0');
        if (!s.includes(candidate)) return false;
    }

    return true;
};
