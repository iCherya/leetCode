/**
 * @param {number} N
 * @return {boolean}
 */
const reorderedPowerOf2 = (N) => {
    const counter = (num) => {
        let res = 0;

        while (num > 0) {
            res += 10 ** (num % 10);
            num = Math.floor(num / 10);
        }

        return res;
    };

    const key = counter(N);

    for (let i = 0; i < 32; i += 1) {
        if (counter(1 << i) === key) return true;
    }

    return false;
};

console.log(reorderedPowerOf2(45));
