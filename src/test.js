let [a, b, c, d] = [22, 8, 8, 12];

let n = a + b + c + d;

let 分子 = n * (a * d - b * c) ** 2;
let 分母 = (a + b) * (c + d) * (a + c) * (b + d);

console.log(`a=${a},  b=${b}, c=${c},  d=${d},  n=${n}`);
console.log(`${分子} / ${分母} = ${分子 / 分母}`);

// D:\Apps\mingw64-GCC-810-posix-seh\bin
let aa = a * d - b * c;
let bb = aa ** 2;

export default class {
  #a = 123;
  b = 2;
  add(a) {
    return a + this.b + this.#a;
  }
}
