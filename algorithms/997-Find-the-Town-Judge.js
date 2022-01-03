// 997. Find the Town Judge [Easy]
// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  const citizens = new Array(n)
    .fill(null)
    .map((_, idx) => ({ isTrusted: 0, trusts: 0, idx: idx + 1 }));

  // eslint-disable-next-line no-restricted-syntax
  for (const [from, to] of trust) {
    const fromCitizens = citizens[from - 1];
    const toCitizen = citizens[to - 1];

    if (!fromCitizens || !toCitizen) return -1;

    fromCitizens.trusts += 1;
    toCitizen.isTrusted += 1;
  }

  const judges = citizens.filter(
    ({ isTrusted, trusts }) => isTrusted === n - 1 && trusts === 0,
  );

  if (judges.length !== 1) return -1;
  return judges[0].idx;
};
