const groupAnagrams = (strs) => {
  let map = new Map();

  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const charIdx = str.charCodeAt(i) - 97;
      count[charIdx]++;
    }

    const key = count.join("#");

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return Array.from(map.values());
};
