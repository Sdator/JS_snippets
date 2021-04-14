// ==UserScript==
// @name                [絕]远程测试
// @author              絕版大叔丶
// @namespace           https://sdator.github.io/
// icon
// @version             1.0
// @match               *://www.zhihu.com/people/*/zvideos
// @description         学习
// @run-at              document-start
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               GM_setValue
// @contributionAmount  10软妹
// ==/UserScript==

//  http://127.0.0.1:8080/远程测试.user.js
//  www.zhihu.com/api/v4/members/*
// http-server -c5
// run-at document-start  脚本尽快注入

(async () => {
  console.log(121231231);
  const fun = "XMLHttpRequest";
  const t = window[fun];
  const window_flag = fun;
  const window_value = window[window_flag];
  Object.defineProperty(window, window_flag, {
    get: function () {
      console.log("Getting window._t", window_value);
      return t;
    },
    set: function (val) {
      console.log("Setting window._t", val);
      debugger;
      t = val;
      return t;
    },
  });
})();
