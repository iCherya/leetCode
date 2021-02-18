/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = (A) => {
    let counter = 0;

    const proceed = (arr) => {
        if (arr.length < 3) return counter;

        const diff = arr[1] - arr[0];
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] !== diff) return;

            counter++;
        }
    };

    for (let i = 0; i < A.length; i++) {
        proceed(A.slice(i));
    }

    return counter;
};
