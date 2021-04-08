/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    const digitsMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    const result = [];
    if (!digits) return result;
    let tempString = '';

    const traverse = (treeLevel) => {
        if (tempString.length === digits.length) {
            result.push(tempString);
            return;
        }

        const number = digits[treeLevel];
        const numberLetters = digitsMap[number];

        for (let i = 0; i < numberLetters.length; i++) {
            tempString += numberLetters[i];

            traverse(treeLevel + 1);
            tempString = tempString.slice(0, -1);
        }
    };

    traverse(0);
    return result;
};
