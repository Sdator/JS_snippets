/*

模板数据所在文件路径
    Chrome\User Data\Default\Preferences


参考：
https://stackoverflow.com/questions/19025718/which-file-does-snippets-of-chrome-dev-tool-saved-at
https://github.com/bgrins/devtools-snippets/issues/28
https://github.com/bgrins/devtools-snippets/pull/35
https://www.jianshu.com/p/b2de794eb359
*/

// import jq from "node-jq";
import fs from "fs";
import path from "path";

const jsonPath = String.raw`D:\DATA\Chrome\User Data\Default\Preferences`;

const json = JSON.parse(fs.readFileSync(jsonPath));

const obj = JSON.parse(json.devtools.preferences.scriptSnippets);

let i = 0;
for (const { name, content } of obj) {
  if (content == "") {
    i++;
    console.log("空的", name, i);
  }
}

// for (const v of str) {
//   console.log(v);
//   break;
// }

function 导出文件(obj) {
  // 备份到新目录
  const backpath = "代码片段";
  // 创建目录
  fs.mkdir(backpath, { recursive: true }, (err) => {
    if (err) throw err;
  });
  //   读取标题和内容 导出文件
  for (const { name, content } of obj) {
    console.log(typeof content);
    let filepath = `${backpath}\\${name}.js`;

    fs.writeFile(filepath, content, (err) => {
      if (err) throw err;
      console.log(`${name}.js文件已被保存`);
    });
  }
}
