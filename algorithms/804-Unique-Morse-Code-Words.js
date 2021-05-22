/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
    const getMorseChar = (char) => {
        const morseTable = {
            a: '.-',
            b: '-...',
            c: '-.-.',
            d: '-..',
            e: '.',
            f: '..-.',
            g: '--.',
            h: '....',
            i: '..',
            j: '.---',
            k: '-.-',
            l: '.-..',
            m: '--',
            n: '-.',
            o: '---',
            p: '.--.',
            q: '--.-',
            r: '.-.',
            s: '...',
            t: '-',
            u: '..-',
            v: '...-',
            w: '.--',
            x: '-..-',
            y: '-.--',
            z: '--..'
        };

        return morseTable[char];
    };

    const set = new Set();

    for (const word of words) {
        const morseWord = word.split('').reduce((acc, char) => acc + getMorseChar(char), '');
        set.add(morseWord);
    }

    return set.size;
};
