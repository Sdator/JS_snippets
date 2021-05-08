import fetch from "node-fetch";

async function 任务请求(任务id, 操作类型) {
  const data = {
    H_name: "tasks",
    action: "ajax",
    cid: 任务id,
    actions: 操作类型,
    nowtime: new Date().getTime(),
    verify: "e419085d",
  };
  const url = new URL("https://www.south-plus.net/plugin.php");
  // 构建url
  for (const v of Object.entries(data)) {
    url.searchParams.append(...v);
  }
  const res = await fetch(url);
  console.log(res);
  console.log(res);

  return await res.text();
}
(async () => {
  const 操作类型 = {
    申请任务: "job",
    完成任务: "job2",
  };
  const 任务ID列表 = [14, 15];
  for (const ID of 任务ID列表) {
    let msg = await 任务请求(ID, 操作类型.申请任务);
    if (msg.includes("已经申请")) console.log("申请成功");
    else console.log("已经申请过了");

    msg = await 任务请求(ID, 操作类型.完成任务);
    if (msg.includes("完成")) console.log("任务完成");
    else console.log("任务失败");
  }
})();
