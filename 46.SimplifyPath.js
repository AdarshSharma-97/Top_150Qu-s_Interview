var simplifyPath = function (path) {
  let len = path.length,
    ans = [];
  for (let i = 0, j = 1; i < len; i = j++) {
    while (path[j] !== "/" && j < len) j++;
    let dir = path.slice(i + 1, j);
    if (!dir || dir === ".") continue;
    else if (dir === "..") ans.pop();
    else ans.push(dir);
  }
  return "/" + ans.join("/");
};
