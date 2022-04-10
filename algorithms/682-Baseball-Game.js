// 682. Baseball Game [Easy]
// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  const scores = [];

  ops.forEach((op) => {
    if (op === 'C') {
      scores.pop();
    } else if (op === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (op === '+') {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    } else {
      scores.push(Number(op));
    }
  });

  return scores.reduce((a, b) => a + b);
};
