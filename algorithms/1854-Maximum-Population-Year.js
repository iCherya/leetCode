/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = (logs) => {
    logs.sort((a, b) => a[0] - b[0]);

    const years = {};

    for (const person of logs) {
        const [birth, death] = person;

        for (let i = birth; i < death; i++) {
            if (!years[i]) years[i] = 0;
            years[i] += 1;
        }
    }

    const maxPopulationYear = Object.entries(years).sort((a, b) => b[1] - a[1])[0];
    return +maxPopulationYear[0];
};
