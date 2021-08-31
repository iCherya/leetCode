// 278. First Bad Version [Easy]
// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return (n) => {
        let [left, right] = [1, n];
        let result;

        while (left <= right) {
            const middle = Math.floor(left + (right - left) / 2);

            if (isBadVersion(middle)) {
                result = middle;
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return result;
    };
};
