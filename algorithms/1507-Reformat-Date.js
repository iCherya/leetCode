/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = (date) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    const [dayStr, monthStr, year] = date.split(' ');
    const day = dayStr.slice(0, -2).padStart(2, 0);
    const month = (months.indexOf(monthStr) + 1).toString().padStart(2, 0);

    return `${year}-${month}-${day}`;
};
