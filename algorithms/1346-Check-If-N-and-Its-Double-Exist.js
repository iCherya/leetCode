/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
    const map = {};

    for (const number of arr) {
        if (map[number] > -Infinity) return true;
        map[number * 2] = number;
        map[number / 2] = number;
    }

    return false;
};
