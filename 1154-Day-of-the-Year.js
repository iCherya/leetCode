/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const firstDayInYear = new Date(`${year}-01-01`);
    const msDiff = date.getTime() - firstDayInYear.getTime();
    const days = msDiff / 1000 / 60 / 60 / 24;

    return days + 1;
};
