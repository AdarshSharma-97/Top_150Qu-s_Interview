var getSum = function (n) {
  let sum = 0;
  while (n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
};

var isHappy = function (n) {
  let set = new Set();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSum(n);
  }

  return n === 1;
};
