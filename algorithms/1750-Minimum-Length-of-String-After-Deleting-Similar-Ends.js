/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = (s) => {
    const process = (str) => {
        if (str.length < 2) return str.length;

        let left = 0;
        let right = str.length - 1;

        if (str[left] !== str[right]) return str.length;

        const letter = str[left];
        for (let i = 1; i < str.length; i++) {
            if (str[i] === letter) {
                left++;
            } else {
                break;
            }
        }
        for (let i = str.length - 1; i >= 1; i--) {
            if (str[i] === letter) {
                right--;
            } else {
                break;
            }
        }

        str = str.slice(left + 1, right + 1);

        return process(str);
    };

    return process(s);
};
