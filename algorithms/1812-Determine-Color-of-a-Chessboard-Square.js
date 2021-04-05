/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = (coordinates) => {
    let [x, y] = coordinates.split('');
    x = x.charCodeAt(0);

    return (x - y) % 2 === 1;
};
