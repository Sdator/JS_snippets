// const fetch = require("node-fetch");
// const { exec } = require("child_process");
// // const iconv = require("iconv-lite");
// const HttpsProxyAgent = require("https-proxy-agent");

import fetch from "node-fetch";
import { exec } from "child_process";
import HttpsProxyAgent from "https-proxy-agent";

class CL {
  // 代理配置
  #ip = "127.0.0.1";
  #port = "10000";
  magnet = "";

  constructor(magnet) {
    this.magnet = magnet;
    this.clink(magnet);
  }

  /**
   * 组成磁链 添加 trackers 复制到粘贴板
   */
  async clink() {
    const url = "https://ngosang.github.io/trackerslist/trackers_all.txt";
    const request = await fetch(url, {
      agent: new HttpsProxyAgent("http://" + this.#ip + ":" + this.#port), // 使用代理
    });
    let data = await request.text();
    data = data.match(/(http|udp).+/g);
    let trackers = "";
    for (const v of data) {
      trackers = trackers + `tr=${v}&`;
    }
    trackers = trackers.slice(0, -1);
    const 成品磁链 = this.magnet + "&" + trackers.slice(0, -1);
    // exec("clip").stdin.end(iconv.encode(成品磁链, "gbk"));
    // 复制到粘贴板
    // exec("clip").stdin.end(成品磁链);
    // console.log(成品磁链);
  }
}

const cl = new CL(
  "magnet:?xt=urn:btih:0f35d66c37817ea24c18a892b68854cd0201228b&dn=Kamen%20Rider%20Kuuga%20%281-49%29"
);

console.log(cl);
