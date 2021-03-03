/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let units = 0;

    for (let i = 0; i < boxTypes.length; i++) {
        const [numberOfBoxes, numberOfUnitsPerBox] = boxTypes[i];

        if (truckSize - numberOfBoxes > 0) {
            units += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            units += truckSize * numberOfUnitsPerBox;
            break;
        }
    }

    return units;
};
