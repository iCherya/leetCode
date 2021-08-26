// 331. Verify Preorder Serialization of a Binary Tree [Medium]
// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/

/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = (preorder) => {
    if (!preorder) return false;
    let nodesCount = 1;

    for (const node of preorder.split(',')) {
        if (nodesCount <= 0) return false;
        nodesCount += node === '#' ? -1 : 1;
    }

    return nodesCount < 1;
};
