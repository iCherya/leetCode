/**
 * @param {number[][]} grid
 * @return {number}
 */
const cherryPickup = (grid) => {
    const columns = grid.length;
    const rows = grid[0].length;
    const memory = Array(columns + 1).fill(false);

    const move = (i = 0, left = 0, right = rows - 1) => {
        const name = `${left}-${right}-${i}`;

        if (memory[name] > -1) {
            return memory[name];
        }

        if (i == columns) {
            return (memory[name] = 0);
        }

        memory[name] = 0;

        for (let p = -1; p <= 1; p++) {
            let newLeft = left;

            if (i > 0) {
                newLeft += p;
            }

            if (!(0 <= newLeft && newLeft < rows)) {
                continue;
            }

            for (let q = -1; q <= 1; q++) {
                let newRight = right;

                if (i > 0) {
                    newRight += q;
                }

                if (!(0 <= newRight && newRight < rows) || newRight <= newLeft) {
                    continue;
                }

                memory[name] = Math.max(
                    memory[name],
                    grid[i][newLeft] + grid[i][newRight] + move(i + 1, newLeft, newRight)
                );
            }
        }

        return memory[name];
    };

    return move();
};
