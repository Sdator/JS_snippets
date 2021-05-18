const fetch = require("node-fetch");
const HttpsProxyAgent = require("https-proxy-agent");
const WEB = require("../lib/WEB.js");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
// const { exec } = require("child_process");
const iconv = require("iconv-lite");

// import fetch from "node-fetch";
// import HttpsProxyAgent from "https-proxy-agent";
// import WEB from "../lib/WEB.js";
// import { exec } from "child_process";

// 立即执行类
class Nadd extends WEB {
  static #操作类型 = {
    申请任务: "job",
    完成任务: "job2",
  };
  static #任务ID列表 = [14, 15]; // 14 周常   15 日常

  constructor() {
    super();
    // 默认执行 每日签到
    Nadd.init();
  }

  static init() {
    this.签到(this.#任务ID列表[0]);
  }

  static async 签到(任务id) {
    let msg = await this.任务(任务id, this.#操作类型.申请任务);

    console.log(msg);

    if (msg.includes("已经申请")) console.log("申请成功");
    else throw new Error("已经申请过了或申请失败");

    msg = await this.任务(任务id, this.#操作类型.完成任务);
    if (msg.includes("完成")) console.log("任务完成");
    else console.log("任务失败");
  }

  // plugin.php?H_name=tasks&action=ajax&actions=job&cid='+id,
  // 完成任务startjob('15');
  static async 任务(任务id, 操作类型) {
    const data = {
      H_name: "tasks",
      action: "ajax",
      cid: 任务id,
      actions: 操作类型,
      nowtime: new Date().getTime(),
      // verify: "e419085d",
    };
    const url = new URL("https://www.south-plus.net/plugin.php");
    // 构建url
    for (const v of Object.entries(data)) {
      url.searchParams.append(...v);
    }
    const res = await fetch(url, {
      agent: new HttpsProxyAgent("http://" + this.ip + ":" + this.port), // 使用代理
      headers: {
        Cookie: "",
      },
    });

    return await res.text();
  }
}

// console.log(navigator.userAgent);

async function 获取chrome版本() {
  const com = String.raw`wmic datafile where name="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" get Version /value`;
  // 使用 { encoding: "buffer" } 解决乱码问题
  const { stdout, stderr } = await exec(com, { encoding: "buffer" });

  // console.log(iconv.decode(stdout, "cp936"));

  // console.log(stderr);
}

获取chrome版本();

// console.log(exec("dir"));

// (async () => {
//   const 操作类型 = {
//     申请任务: "job",
//     完成任务: "job2",
//   };
//   const 任务ID列表 = [14, 15];
//   for (const ID of 任务ID列表) {
//     let msg = await 任务(ID, 操作类型.申请任务);
//     if (msg.includes("已经申请")) console.log("申请成功");
//     else console.log("已经申请过了");

//     msg = await 任务(ID, 操作类型.完成任务);
//     if (msg.includes("完成")) console.log("任务完成");
//     else console.log("任务失败");
//   }
// })();
