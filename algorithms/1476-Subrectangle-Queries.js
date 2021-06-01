/**
 * @param {number[][]} rectangle
 */
class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = rectangle;
    }
    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @param {number} newValue
     * @return {void}
     */
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                this.rectangle[i][j] = newValue;
            }
        }
    }

    /**
     * @param {number} row
     * @param {number} col
     * @return {number}
     */
    getValue(row, col) {
        return this.rectangle[row][col];
    }
}
