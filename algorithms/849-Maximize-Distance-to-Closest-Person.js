// 849. Maximize Distance to Closest Person [Medium]
// https://leetcode.com/problems/maximize-distance-to-closest-person/

/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = (seats) => {
  const totalSeats = seats.length;
  const distancesFromLeft = new Array(totalSeats).fill(totalSeats);
  const distancesFromRight = new Array(totalSeats).fill(totalSeats);

  for (let i = 0; i < totalSeats; i += 1) {
    if (seats[i] === 1) {
      distancesFromLeft[i] = 0;
    } else if (i !== 0) {
      distancesFromLeft[i] = distancesFromLeft[i - 1] + 1;
    }
  }

  for (let i = totalSeats - 1; i >= 0; i -= 1) {
    if (seats[i] === 1) {
      distancesFromRight[i] = 0;
    } else if (i !== totalSeats - 1) {
      distancesFromRight[i] = distancesFromRight[i + 1] + 1;
    }
  }

  let maxDistance = 0;

  for (let i = 0; i < totalSeats; i += 1) {
    const combinedDistance = Math.min(
      distancesFromLeft[i],
      distancesFromRight[i],
    );
    maxDistance = Math.max(maxDistance, combinedDistance);
  }

  return maxDistance;
};
