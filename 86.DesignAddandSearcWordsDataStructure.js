class WordDictionary {
  constructor() {
    this.trie = {};
  }

  addWord(word) {
    let node = this.trie;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true;
  }

  search(word) {
    function dfs(node, i) {
      if (i === word.length) {
        return !!node.isEnd;
      }

      const char = word[i];
      if (char === ".") {
        for (const nextChar in node) {
          if (nextChar !== "isEnd" && dfs(node[nextChar], i + 1)) {
            return true;
          }
        }
        return false;
      } else if (node[char]) {
        return dfs(node[char], i + 1);
      } else {
        return false;
      }
    }

    return dfs(this.trie, 0);
  }
}
