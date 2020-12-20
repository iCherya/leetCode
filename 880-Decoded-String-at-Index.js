/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const decodeAtIndex = (S, K) => {
    const len = S.length;
    let size = 0;

    for (let i = 0; i < len; i++) {
        const char = S.charAt(i);
        const charNum = parseInt(char);

        if (isNaN(charNum)) {
            size++;
        } else {
            size *= charNum;
        }
    }

    for (let i = len - 1; i >= 0; i--) {
        K %= size;
        const char = S.charAt(i);
        const isChar = isNaN(parseInt(char));

        if (K === 0 && isChar) {
            return char;
        }

        if (!isChar) {
            size = Math.round(size / parseInt(char));
        } else {
            size--;
        }
    }

    return null;
};
