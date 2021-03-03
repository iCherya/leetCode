/**
 * @param {number[]} array
 * @return {boolean}
 */
const isMonotonic = (array) => {
    if (array.length <= 2) return true;

    let arrayType = 0;
    let i = 0;
    while (arrayType === 0 && i < array.length) {
        const diff = array[i + 1] - array[i];
        i++;
        if (diff === 0) continue;
        else arrayType = diff > 0 ? 1 : -1;
    }

    for (let idx = 0; idx < array.length - 1; idx++) {
        if ((array[idx + 1] - array[idx]) * arrayType < 0) return false;
    }

    return true;
};
