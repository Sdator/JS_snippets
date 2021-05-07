import fetch from "node-fetch";
import HttpsProxyAgent from "https-proxy-agent";
import Parser from "rss-parser";

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
    const url = "https://rsshub.app/weibo/user/5833749881";
    const request = await fetch(url, {
      agent: new HttpsProxyAgent("http://" + this.#ip + ":" + this.#port), // 使用代理
    });
    const data = await request.text();
    // console.log(data);

    // 初始化对象 并解析获取到的xml文本
    const parser = new Parser();
    const feed = await parser.parseString(data);

    const 最新博文 = feed.items;
    const isTrue = /活动|大促|促销|限时|力度|攻略/.test(最新博文);

    for (const v of 最新博文) {
      if (/活动|大促|促销|限时|力度|攻略/.test(v.content)) {
        console.log(v.pubDate, v.content);
      }
    }

    console.log(最新博文);

    // data = data.match(/(http|udp).+/g);
  }
}

const cl = new CL();
