/**
 * @param {number} target
 * @return {number}
 */
const reachNumber = (target) => {
    target = Math.abs(target);

    let i = 0;
    while (target > 0) {
        target -= ++i;
    }

    return target % 2 === 0 ? i : i + 1 + (i % 2);
};
