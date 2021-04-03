/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
    if (arr.length <= 2) return false;
    const peak = {
        index: -1,
        value: -1
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > peak.value) {
            peak.index = i;
            peak.value = arr[i];
        }
    }

    if (peak.index === 0 || peak.index === arr.length - 1) {
        return false;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (i >= peak.index) {
            if (arr[i] <= arr[i + 1]) {
                return false;
            }
        } else {
            if (arr[i] >= arr[i + 1]) {
                return false;
            }
        }
    }

    return true;
};
