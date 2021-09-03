const s = "我知道你是个聪明的孩子 也许你可以和我聊聊 作为朋友";
const arr = [];
for (let v of s) {
  arr.push(v.codePointAt().toString(2).padStart(16, "0"));
}

let 序列 = "";
const 二进制 = arr.join("");
const r = 二进制.matchAll(/0+/g);
for (const v of r) {
  //   console.log(v.index, v[0].length);
  序列 += `${v.index}${v[0].length}`;
}

console.log(序列.length, 二进制.length, 序列.length / 二进制.length);

console.log(序列, 二进制);
