// 1450. Number of Students Doing Homework at a Given Time [Easy]
// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {
    let count = 0;

    for (let i = 0; i < startTime.length; i++) {
        const start = startTime[i];
        const end = endTime[i];

        if (start <= queryTime && end >= queryTime) count += 1;
    }

    return count;
};
