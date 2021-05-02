/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = (courses) => {
    if (!courses.length) return 0;

    courses.sort(([, day1], [, day2]) => day2 - day1);

    const dp = new Array(courses.length + 1).fill(-1);
    dp[0] = Number.MAX_SAFE_INTEGER;
    let maxCount = 0;

    for (const [time, day] of courses) {
        for (let i = maxCount + 1; i > 0; i--) {
            dp[i] = Math.max(dp[i], Math.min(dp[i - 1], day) - time);

            if (dp[i] > -1 && i > maxCount) maxCount = i;
        }
    }

    return maxCount;
};
