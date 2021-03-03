/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = (A) => {
    const commonArr = [];
    const firstWordArr = A[0].split('');

    firstWordArr.forEach((char) => {
        if (A.every((word) => word.includes(char))) {
            commonArr.push(char);
            A = A.map((word) => word.replace(char, ''));
        }
    });

    return commonArr;
};
