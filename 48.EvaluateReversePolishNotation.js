var evalRPN = function (tokens) {
  let stack = [];
  let set = new Set(["+", "-", "*", "/"]);

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    if (set.has(token)) {
      let secondNum = stack.pop();
      let firstNum = stack.pop();

      if (token === "+") {
        stack.push(firstNum + secondNum);
      } else if (token === "-") {
        stack.push(firstNum - secondNum);
      } else if (token === "*") {
        stack.push(firstNum * secondNum);
      } else if (token === "/") {
        // ensures integer division by truncating the decimal part of the division result,
        // following JavaScript's bitwise OR operation rules.
        stack.push((firstNum / secondNum) | 0);
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};
