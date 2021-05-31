/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = (products, searchWord) => {
    let items = [...products.sort()];

    const result = [];
    for (let i = 1; i <= searchWord.length; i++) {
        const phrase = searchWord.slice(0, i);
        items = items.filter((el) => el.startsWith(phrase));
        result.push(items.slice(0, 3));
    }

    return result;
};
