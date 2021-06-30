// 1491. Average Salary Excluding the Minimum and Maximum Salary [Easy]
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    const sum = salary.reduce((acc, curr) => acc + curr, 0) - min - max;

    return sum / (salary.length - 2);
};
