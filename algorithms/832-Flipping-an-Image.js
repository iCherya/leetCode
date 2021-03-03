/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) =>
    A.map((arr) =>
        arr.reverse().map((el) => {
            return el === 1 ? 0 : 1;
        })
    );
