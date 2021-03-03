/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let say = '';

        if (i % 3 === 0) say += 'Fizz';
        if (i % 5 === 0) say += 'Buzz';
        if (say === '') say += i;

        result.push(say);
    }

    return result;
};
