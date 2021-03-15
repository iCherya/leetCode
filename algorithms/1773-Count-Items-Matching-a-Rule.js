/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
    const keys = ['type', 'color', 'name'];

    return items.filter((el) => {
        const idx = keys.indexOf(ruleKey);

        return el[idx] === ruleValue;
    }).length;
};
