/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr = str.split(' ');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        let newWord = '';
        if (vowels.includes(word[0].toLowerCase())) {
            newWord += word + 'ma';
        } else {
            newWord += word.slice(1) + word[0] + 'ma';
        }

        let aCounter = 0;
        while (aCounter < i + 1) {
            newWord += 'a';
            aCounter++;
        }

        result.push(newWord);
    }

    return result.join(' ');
};
