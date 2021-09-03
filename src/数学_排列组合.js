// 0!=1，n!=(n-1)!×n

const 阶乘 = (len) => (len <= 1 ? 1 : len * 阶乘(len - 1));

const 全排列 = 阶乘;

const 递归_排列 = (min, max) => {
  const end = max - (min - 1);
  const 排 = (min, num) => {
    return num < end ? end : num * 排(min, num - 1);
  };
  return 排(min, max);
};

const For_排列 = (min, max) => {
  const end = max - (min - 1);
  let num = 1;
  for (let i = max; i >= end; i--) {
    num *= i;
    console.log(num, i, max);
  }
  return num;
};

//
const 部分排列 = (min, max) => 全排列(max) / 全排列(max - min);

const 排列 = 部分排列;

// a/(b*c) = a/b/c
const 组合 = (min, max) => {
  return 排列(min, max) / 全排列(min);
};

console.log(排列(4, 8));
console.log(组合(4, 8));

const 取倍数 = (num, b) => num * b;
const 取因数 = (num) => {
  let arr = [];
  for (let index = 1; index <= num; index++) {
    let res = num % index;
    if (!res) {
      arr.push(index);
    }
  }
  return arr;
};
let a = 取因数(43);
