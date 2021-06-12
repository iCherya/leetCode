// 1894. Find the Student that Will Replace the Chalk
// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
const chalkReplacer = (chalk, k) => {
    const students = chalk.length;

    let studentIdx = 0;
    while (k > 0) {
        k -= chalk[studentIdx];
        studentIdx += 1;

        if (studentIdx >= students) {
            studentIdx = 0;
        }
    }

    if (k === 0) return studentIdx;
    if (studentIdx > 0) return studentIdx - 1;
    return students - 1;
};
