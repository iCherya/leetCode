/**
 * @param {number[]} instructions
 * @return {number}
 */
const createSortedArray2 = (instructions) => {
    const temp = [instructions[0]];
    let sum = 0;

    for (let i = 1; i < instructions.length; i++) {
        const instrElem = instructions[i];
        let index = 0;
        let first = 0;
        let second = 0;
        let same = 0;

        for (const tempElem of temp) {
            if (instrElem > tempElem) {
                index++;
            } else if (instrElem === tempElem) {
                same++;
            }
        }

        first = index;
        second = temp.length - index - same;

        if (first <= second) {
            sum += first;
        } else {
            sum += second;
        }

        temp.push(instrElem);
        temp.sort((a, b) => a - b);
    }

    return sum;
};

const createSortedArray = (instructions) => {
    const get = (i) => {
        res = counts[i];
        while (i > 0) {
            i -= i & -i;
            res += counts[i];
        }
        return res;
    };

    const insert = (i) => {
        while (i <= length) {
            counts[i] += 1;
            i += i & -i;
        }
    };

    let s = [...instructions];
    s.sort((a, b) => b - a);
    let length = s[0];

    let M = 10 ** 9 + 7;
    let counts = new Array(length + 1).fill(0);
    let res = 0;

    for (let i = 0; i < instructions.length; i++) {
        let v = instructions[i];
        res = (res + Math.min(get(v - 1), i - get(v))) % M;
        insert(v);
    }

    return res;
};
