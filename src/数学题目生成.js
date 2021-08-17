function getRandomIntInclusive(min = -100, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

// const 符号 = ["+"), "-"), "*"), "/")];

const 符号 = ["+", "-", "*", "/"];

function 取随机符号() {
  const v = getRandomIntInclusive(0, 3);
  // 方法1 无需判断 根据下标来返回
  return 符号[v];
  // 方法1 根据值来判断返回
  //   switch (v) {
  //     case 1:
  //       return 符号.加;
  //     case 2:
  //       return 符号.减;
  //     case 3:
  //       return 符号.乘;
  //     case 4:
  //       return 符号.除;
  //     default:
  //       throw new Error("Undefined color");
  //   }
}

function 生成数值(len = 3) {
  const arr = [];
  for (let index = 0; index < len; index++) {
    let num = getRandomIntInclusive();
    arr.push(num >= 0 ? "+" + num : num);
    }
  return arr;
}

function 生成公式(len = 5) {
  const arr = [];
    for (let index = 0; index < len; index++) {
      arr.push(生成数值().join(""));
  }
  return arr;
}

let a = 生成公式();

console.log(a);
