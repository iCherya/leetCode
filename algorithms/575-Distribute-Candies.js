/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
    const maxCandiesCanEat = candyType.length / 2;

    let types = {};

    for (const type of candyType) {
        if (!types[type]) types[type] = 0;
        types[type] += 1;
    }

    types = Object.keys(types);

    let result = 0;
    while (result < maxCandiesCanEat && types.length > 0) {
        types.pop();
        result++;
    }

    return result;
};
