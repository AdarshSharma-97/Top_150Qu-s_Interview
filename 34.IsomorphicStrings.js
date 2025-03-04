const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let sFreq = {},
    tFreq = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sFreq[charS] !== tFreq[charT]) return false;

    sFreq[charS] = i + 1;
    tFreq[charT] = i + 1;
  }

  return true;
};
