// 1041. Robot Bounded In Circle [Medium]
// https://leetcode.com/problems/robot-bounded-in-circle/

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = (instructions) => {
  const directions = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
  ];

  let k = 0;
  let x = 0;
  let y = 0;

  instructions.split('').forEach((instruction) => {
    if (instruction === 'R') {
      k = (k + 1) % 4;
    } else if (instruction === 'L') {
      k = (k + 3) % 4;
    } else {
      const { x: moveX, y: moveY } = directions[k];
      x += moveX;
      y += moveY;
    }
  });

  return (x === 0 && y === 0) || k > 0;
};
