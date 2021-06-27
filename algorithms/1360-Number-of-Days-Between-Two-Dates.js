// 1360. Number of Days Between Two Dates [Easy]
// https://leetcode.com/problems/number-of-days-between-two-dates/

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = (date1, date2) => {
    const ms1 = new Date(date1).getTime();
    const ms2 = new Date(date2).getTime();
    const diff = Math.abs(ms1 - ms2);

    return diff / (1000 * 60 * 60 * 24);
};
