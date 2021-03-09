/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        const odd = [];
        sum += arr[i];

        odd.push(arr[i]);

        for (let j = i + 1; j < arr.length; j += 1) {
            odd.push(arr[j]);

            if (odd.length % 2) {
                sum += odd.reduce((acc, curr) => acc + curr, 0);
            }
        }
    }

    return sum;
};
