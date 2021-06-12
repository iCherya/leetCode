// 1895. Largest Magic Square
// https://leetcode.com/problems/largest-magic-square/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestMagicSquare = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    let maxSize = Math.min(m, n);

    while (maxSize > 1) {
        let l = 0;
        let h = 0;
        while (l <= m) {
            while (h <= n) {
                const pos = { i: h, j: l };
                const size = { i: maxSize, j: maxSize };
                while (pos.i <= m - maxSize) {
                    while (pos.j <= n - maxSize) {
                        const result = grid
                            .filter((_, i) => i >= pos.i && i < pos.i + size.i)
                            .map((a) => a.slice(pos.j, pos.j + size.j));

                        if (isMagicSquare(result)) return maxSize;

                        pos.j += 1;
                    }
                    pos.i += 1;
                }
                h += 1;
            }
            l += 1;
        }
        maxSize -= 1;
    }

    return 1;
};

function isMagicSquare(arr) {
    if (arr.length === 0) return false;

    for (const subArr of arr) {
        if (!subArr) return false;
    }

    const getSum = (array) => array.reduce((acc, curr) => acc + curr, 0);

    const getColumns = (array) => {
        const columns = [];

        for (let i = 0; i < array.length; i++) {
            const column = [];

            for (let j = 0; j < array.length; j++) {
                column.push(array[j][i]);
            }

            columns.push(column);
        }

        return columns;
    };

    const getDiagonals = (array) => {
        const d1 = [];
        const d2 = [];

        for (let i = 0; i < array.length; i++) {
            d1.push(array[i][i]);
            d2.push(array[i][array.length - i - 1]);
        }

        return [d1, d2];
    };

    const magicSum = getSum(arr[0]);
    const candidates = [...arr, ...getColumns(arr), ...getDiagonals(arr)];

    for (const candidate of candidates) {
        if (getSum(candidate) !== magicSum) return false;
    }

    return true;
}
