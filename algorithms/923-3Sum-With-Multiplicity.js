/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = (arr, target) => {
    const map = {};
    let tuples = 0;

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            const sum = arr[i] + arr[j];

            if (map[target - sum]) tuples += map[target - sum];
        }

        if (!map[arr[i]]) map[arr[i]] = 0;
        map[arr[i]] += 1;
    }

    return tuples % (10 ** 9 + 7);
};
