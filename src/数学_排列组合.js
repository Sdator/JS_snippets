// 阶乘
function 排列(num) {
  let tmp = 1;
  for (let index = 1; index <= num; index++) {
    tmp *= index;
  }
  return tmp;
}

// 阶乘
function factorial(n, total = 1) {
  console.log("factorial", n - 1, n * total, n, total);
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

function 组合(max, num) {
  return 排列(max) / (排列(max - num) * 排列(num));
}

const a = 组合(36, 7);
console.log(a);

// C26 = A6 / (A(6 - 2) * A2)
// =6 * 5 / 2 * 1
// =30 / 2
// =15
