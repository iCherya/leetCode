// 1629. Slowest Key [Easy]
// https://leetcode.com/problems/slowest-key/

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = (releaseTimes, keysPressed) =>
    releaseTimes
        .map((curr, idx, arr) => {
            const prev = arr[idx - 1] || 0;
            return { time: curr - prev, value: keysPressed[idx] };
        })
        .sort((a, b) => {
            if (b.time === a.time) return b.value.charCodeAt(0) - a.value.charCodeAt(0);
            return b.time - a.time;
        })[0].value;
