/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
    const answer = new Array(queries.length).fill(0);

    for (let i = 0; i < queries.length; i++) {
        const [circleX, circleY, circleR] = queries[i];

        for (const point of points) {
            const [pointX, pointY] = point;

            const distance = Math.sqrt((pointX - circleX) ** 2 + (pointY - circleY) ** 2);
            if (distance <= circleR) answer[i] += 1;
        }
    }

    return answer;
};
