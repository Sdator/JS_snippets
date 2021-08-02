// ==UserScript==
// @name                [絕]网址替换
// @author              絕版大叔丶
// @namespace           https://sdator.github.io/
// @icon                https://avatars3.githubusercontent.com/u/17621623?s=40&v=4
// @version             1.0
// @match               *://*/*
// @description         修改域名并跳转
// @updateURL           https://github.com/Sdator/JS_snippets/raw/master/src/地址替换.user.js.user.js
// @downloadURL         https://github.com/Sdator/JS_snippets/raw/master/src/地址替换.user.js.user.js
// @grant               none
// ==/UserScript==

const url = new URL(window.location.href);
console.log("old", url);

// 这里填写你需要替换的地址
// 元素0为原地址 元素1为目标地址
const urls = [
  ["www.baidu.com", "www.google.com"],
  ["www.youku.com", "www.youtube.com"],
];

for (const [k, v] of Object.entries(urls)) {
  if (url.host == v[0]) {
    url.host = v[1];
    self.location.href = url;
    break;
  }
}
console.log("new", url);
