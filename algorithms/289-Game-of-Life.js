/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board) => {
    const countAliveNeibors = (row, col, arr) => {
        let count = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) {
                    continue;
                }

                if (arr[row + i] !== undefined) {
                    if (arr[row + i][col + j] === 1) {
                        count++;
                    }
                }
            }
        }

        return count;
    };

    const prevBoard = board.map((el) => [...el]);

    for (let i = 0; i < prevBoard.length; i++) {
        for (let j = 0; j < prevBoard[i].length; j++) {
            const cell = prevBoard[i][j];
            const liveNeibors = countAliveNeibors(i, j, prevBoard);

            if ((cell && liveNeibors === 2) || liveNeibors === 3) {
                board[i][j] = 1;
            } else {
                board[i][j] = 0;
            }
        }
    }
};
