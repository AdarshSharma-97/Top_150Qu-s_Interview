const isSubsequence = (s, t) => {
  // base case
  if (s.length > t.length) return false;
  if (!s) return true;

  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === s.length;
};
