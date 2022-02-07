// 438. Find All Anagrams in a String [Medium]
// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const indices = [];
  const len = p.length;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const stringify = (obj) => Object.entries(obj).join('');
  const getMap = (string, initialMapValue, createWithEmptyValues) =>
    string.split('').reduce((acc, curr) => {
      if (!acc[curr]) acc[curr] = 0;
      acc[curr] += createWithEmptyValues ? 0 : 1;
      return acc;
    }, initialMapValue);

  const alphabetMap = getMap(alphabet, {}, true);
  const pMap = getMap(p, { ...alphabetMap });
  const windowMap = getMap(s.slice(0, len), { ...alphabetMap });

  const pMapStr = stringify(pMap);
  if (pMapStr === stringify(windowMap)) indices.push(0);

  for (let i = p.length; i < s.length; i += 1) {
    const prev = s[i - len];
    const curr = s[i];

    windowMap[prev] -= 1;
    windowMap[curr] += 1;

    if (pMapStr === stringify(windowMap)) indices.push(i - len + 1);
  }

  return indices;
};
