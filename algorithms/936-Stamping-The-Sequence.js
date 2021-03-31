/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
const movesToStamp = (stamp, target) => {
    const result = [];
    const stampArr = stamp.split('');
    const targetArr = target.split('');
    const stampLen = stamp.length;
    const targetLen = target.length;

    const traverse = (idx) => {
        let visited = true;
        for (let i = 0; i < stampLen; i += 1) {
            if (stampArr[i] !== targetArr[idx + i] && targetArr[idx + i] !== '?') {
                visited = false;
                break;
            }
        }

        if (visited) {
            result.push(idx);

            for (let i = 0; i < stampLen; i += 1) {
                targetArr[idx + i] = '?';
            }
        }
    };

    for (let i = 0; i < targetLen - stampLen + 1; i += 1) {
        traverse(i);
    }
    for (let i = targetLen - stampLen; i >= 0; i -= 1) {
        traverse(i);
    }

    if (targetArr.join('') !== Array(targetLen).fill('?').join('')) {
        return [];
    }

    return result.reverse();
};
