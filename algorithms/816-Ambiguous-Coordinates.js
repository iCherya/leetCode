/**
 * @param {string} s
 * @return {string[]}
 */
const ambiguousCoordinates = (s) => {
    const format = (i, j) => `(${i}, ${j})`;
    const isValid = (num) => Number(num).toString().length === num.length;
    const getAllOptions = (num) => {
        const options = [num];

        for (let i = 1; i < num.length; i++) {
            const beforeDecimal = num.slice(0, i);
            const afterDecimal = num.slice(i);
            const candidate = `${beforeDecimal}.${afterDecimal}`;

            if (isValid(candidate)) options.push(candidate);
        }

        return options;
    };
    const getCombinedOptions = (arr1, arr2) => {
        const combined = [];

        for (const el1 of arr1) {
            for (const el2 of arr2) {
                if (isValid(el1) && isValid(el2)) combined.push(format(el1, el2));
            }
        }

        return combined;
    };

    const result = [];

    for (let i = 2; i < s.length; i++) {
        const leftPart = s.slice(1, i);
        const rightPart = s.slice(i, s.length - 1);

        const leftOptions = leftPart ? getAllOptions(leftPart) : [];
        const rightOptions = rightPart ? getAllOptions(rightPart) : [];

        result.push(...getCombinedOptions(leftOptions, rightOptions));
    }

    return result;
};
