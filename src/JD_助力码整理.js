// 通过命令 jd jd_get_share_code now 获得字符串输入下方
const str = `

`;

const db = {
  京东农场,
  京东萌宠,
  种豆得豆,
  东东工厂,
  京喜工厂: "MyDreamFactory",
  京喜农场,
  闪购盲盒,
  财富岛,
  签到领现金: "MyCash",
};

const num = str.matchAll(/（(.*)）(.*)】(.*)/g);
const obj = {};

for (const [, 账号, 活动, 助力码] of num) {
  if (助力码 == "undefined") continue;
  obj[账号] = obj[账号] ?? {};
  //   arr[账号][活动] = arr[账号][活动] ?? {};

  obj[账号][活动] = 助力码;
}

const arr = {};

for (const [k, v] of Object.entries(obj)) {
  for (const [活动, 助力码] of Object.entries(v)) {
    arr[活动] = arr[活动] ?? [];
    arr[活动].push(助力码);
    // console.log(v[活动]);
  }
}

for (const [活动, 助力码] of Object.entries(arr)) {
  //   console.log(活动, 助力码.join());
  console.log(活动);
}
