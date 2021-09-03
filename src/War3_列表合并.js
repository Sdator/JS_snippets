import fs from "fs";
import util from "util";
import time from "timers";

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
// 过滤器
const listFile = new Set();
// 输出文件名
const fileNmae = "listfile";
// 读取路径
const dir = String.raw`D:\demo`;

async function 读取文件数据(路径) {
  const data = await readFile(路径);
  return data.toString().split("\n");
}

// async function 异步读取数据集(路径) {
//   return new Promise((res, rev) => {
//     const data = [];
//     路径.map(async (v) => {
//       data.push(...(await 读取文件数据(dir + "\\" + v)));
//     });
//     res(data);
//   });
// }

async function 收集数据(path) {
  const files = await readdir(path);
  const data = [];

  files.map(async (v) => {
    data.push(读取文件数据(dir + "\\" + v));
  });

  Promise.all(data).then((v) => {
    console.log(v);
  });
  //   for (const v of await data) {
  //     console.log(await v);
  //   }

  //   const data = await 异步读取数据集(files).then((v) => {
  //     console.log(v);
  //   });

  //   for (const v of data) {
  //     arr.push(v);
  //     listFile.add(v.trim());
  //   }
  //   console.log(listFile);
  //   .then((data) => {
  //     console.log(data);
  //   });
  //   console.log(files);
  //   files.map(async (v) => {
  //     arr.push(...(await 读取文件数据(dir + "\\" + v)));
  //     console.log(11);
  //     // console.log(...(await 读取文件数据(dir + "\\" + v)));
  //   });

  //   for (const v of data) {
  //     listFile.add(v.trim());
  //   }

  //   fs.writeFile(fileNmae, [...listFile].join("\n"), (err) => {
  //     if (err) throw new Error(`写出文件失败，错误代码： (${err})`);
  //     console.log("文件写出成功");
  //   });

  console.log("文件", data.length, listFile.size, listFile);
}

async function 目录枚举(path) {
  const files = await readdir(path);
  console.log(files);
  for (const file of files) {
    收集数据(file);
  }
}

(async function main() {
  //   目录枚举(
  //     String.raw`E:\OneDrive - 绒布球教育委员会\g游戏\War3\工具\War3ModelEditor-DESKTOP-9RB6LNS\Listfiles`
  //     );

  收集数据(dir);

  //   const arr = [1, 2, 3];
  //   arr.push(...[1, 2, 3, 5, 6, 4]);
  //   console.log(arr);
})();
