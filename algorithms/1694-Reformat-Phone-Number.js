/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = (number) => {
    number = number.replace(/\D/g, '');

    const groups = [];

    while (number.length > 0) {
        if (number.length <= 3) {
            groups.push(number);
            break;
        }
        if (number.length === 4) {
            groups.push(number.slice(0, 2), number.slice(2));
            break;
        }

        groups.push(number.slice(0, 3));
        number = number.slice(3);
    }

    return groups.join('-');
};
