var reverseWords = function (s) {
  let n = s.length;
  let trimmed = "";
  let i = 0;

  while (i < n) {
    while (i < n && s[i] === " ") i++;
    if (i >= n) break;

    let start = i;
    while (i < n && s[i] !== " ") i++;
    if (trimmed.length > 0) trimmed = " " + trimmed;
    trimmed = s.slice(start, i) + trimmed;
  }

  return trimmed;
};

