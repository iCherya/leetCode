/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = (pushed, popped) => {
    if (pushed.length === 0) return true;

    const stack = [pushed[0]];
    const getLast = (arr) => arr[arr.length - 1];

    let pushIndex = 1;
    let popIndex = 0;

    while (popIndex < popped.length || pushIndex < pushed.length) {
        if (getLast(stack) === popped[popIndex]) {
            stack.pop();
            popIndex++;
        } else {
            if (pushed[pushIndex] === undefined) return false;
            stack.push(pushed[pushIndex]);
            pushIndex++;
        }
    }

    return stack.length === 0;
};
