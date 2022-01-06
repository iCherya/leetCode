// 1094. Car Pooling [Medium]
// https://leetcode.com/problems/car-pooling/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = (trips, capacity) => {
  const stops = [];

  trips.forEach(([people, from, to]) => {
    stops.push([from, people]);
    stops.push([to, -people]);
  });

  stops.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let emptySeats = capacity;
  // eslint-disable-next-line no-restricted-syntax
  for (const [, peopleDelta] of stops) {
    emptySeats -= peopleDelta;
    if (emptySeats < 0) return false;
  }

  return true;
};
