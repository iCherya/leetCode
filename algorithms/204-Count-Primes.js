/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
    if (n <= 2) return 0;
    const primes = [2];

    const isPrime = (number) => {
        for (let item of primes) {
            if (number % item === 0) return false;
            if (item * item > number) break;
        }

        return true;
    };

    for (let i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes.length;
};
