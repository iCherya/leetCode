/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
    people.sort((a, b) => b - a);
    let result = 0;

    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            left++;
        }

        result++;
    }

    return result;
};
