/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
    const romanList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let res = '';

    while (num > 0) {
        for (let i = 0; i < romanList.length; i++) {
            if (num >= valueList[i]) {
                num -= valueList[i];
                res += romanList[i];
                break;
            }
        }
    }

    return res;
};
