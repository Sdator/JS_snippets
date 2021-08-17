// 通过命令 jd jd_get_share_code now 获得字符串输入下方
const str = `


注：临时活动的互助码不添加到此处，如有需要请手动运行对应临时活动脚本

======账号1开始======
【京东账号1（绝版Air）京东农场】be7902e2dc264a139c564bb86c5afba5
【京东账号1（绝版Air）京东萌宠】MTE0MDQ3MzEwMDAwMDAwNDcxNTY1OTE=
【京东账号1（绝版Air）种豆得豆】vyxgg5m6v3auqu5oqfntr5gsey
【京东账号1（绝版Air）东东工厂】T012aXbel6ehhA2VCjVWnYaS5kRrbA
【京东账号1（绝版Air）京喜工厂】CeII57P-U_JoOzfvDWTAcg==
注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
【京东账号1（绝版Air）京喜农场】{"smp":"f0924b84840f78c2be6f41a411837dd3","active":"jdnc_1_3yuanfanqiej210422_2","joinnum":1}
【京东账号1（绝版Air）闪购盲盒】T012aXbel6ehhA2VCjVQmoaT5kRrbA
【京东账号1（绝版Air）财富岛】undefined
【京东账号1（绝版Air）签到领现金】9JCau1UKF6Vk
======账号1结束======

======账号2开始======
【京东账号2（jd_wtbdwXCDCZhV）京东农场】5718e7f8f7ba4cbeaaf133c3b552fb77
【京东账号2（jd_wtbdwXCDCZhV）京东萌宠】MTEyNTEyNTE1MDAwMDAwMDA0NzE1Njk0Mw==
【京东账号2（jd_wtbdwXCDCZhV）种豆得豆】4oupleiwuds2brjegeoat47bhjglhkik3p7lapa
【京东账号2（jd_wtbdwXCDCZhV）东东工厂】T0205KkcB1pLoRO_U26H_q9sCjVWnYaS5kRrbA
【京东账号2（jd_wtbdwXCDCZhV）京喜农场】未选择种子，请先去京喜农场选择种子
【京东账号2（jd_wtbdwXCDCZhV）闪购盲盒】T0205KkcB1pLoRO_U26H_q9sCjVQmoaT5kRrbA
【京东账号2（jd_wtbdwXCDCZhV）财富岛】undefined
【京东账号2（jd_wtbdwXCDCZhV）签到领现金】eU9YK6jgMrtOghqmoSt1
======账号2结束======

======账号3开始======
【京东账号3（jd_XTNSLsigEQeG）京东农场】6e064c0f30834b17b6864e75b1b996a9
【京东账号3（jd_XTNSLsigEQeG）京东萌宠】MTAxNzIyNTU1NDAwMDAwMDA0Nzc0MzA2MQ==
【京东账号3（jd_XTNSLsigEQeG）种豆得豆】dhsx55vjyuzkwtlko2czhvuqpjexh3nzecbxb6i
【京东账号3（jd_XTNSLsigEQeG）东东工厂】T0205KkcKHpnliiUeU2B9aJ9CjVWnYaS5kRrbA
【京东账号3（jd_XTNSLsigEQeG）京喜工厂】Fmi8tFwDuBi8Ot6wqd0fLA==
【京东账号3（jd_XTNSLsigEQeG）京喜农场】未选择种子，请先去京喜农场选择种子
【京东账号3（jd_XTNSLsigEQeG）闪购盲盒】T0205KkcKHpnliiUeU2B9aJ9CjVQmoaT5kRrbA
【京东账号3（jd_XTNSLsigEQeG）财富岛】undefined
【京东账号3（jd_XTNSLsigEQeG）签到领现金】eU9YBIjMBYBlqDmgqiZk
======账号3结束======

======账号4开始======
【京东账号4（忽悠慢）京东农场】f9154a68cc484e42bc36a85f85b91a72
【京东账号4（忽悠慢）种豆得豆】s6de676ofu3lzeibqdfzahia6e
【京东账号4（忽悠慢）东东工厂】T012a3L-lqyJI-FFCjVWnYaS5kRrbA
注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
【京东账号4（忽悠慢）京喜农场】{"smp":"13488e3fd1e5af7722e260a5f832d606","active":"jdnc_1_papaya210315_2","joinnum":1}
【京东账号4（忽悠慢）闪购盲盒】T012a3L-lqyJI-FFCjVQmoaT5kRrbA
【京东账号4（忽悠慢）财富岛】undefined
【京东账号4（忽悠慢）签到领现金】9pS6ul4isEm0
======账号4结束======


`;

const db = {
  京东农场: "",
  京东萌宠: "",
  种豆得豆: "",
  东东工厂: "",
  京喜工厂: "MyDreamFactory",
  京喜农场: "",
  闪购盲盒: "",
  财富岛: "",
  签到领现金: "MyCash",
};

// 提取各账号 助力码
const num = str.matchAll(/（(.*)）(.*)】(.*)/g);
const obj = {};

for (const [, 账号, 活动, 助力码] of num) {
  if (助力码 == "undefined") continue;
  obj[账号] = obj[账号] ?? {};
  obj[账号][活动] = 助力码;
}
// console.log(obj);


// 按 活动类型 排列
const arr = {};
for (const [k, v] of Object.entries(obj)) {
  for (const [活动, 助力码] of Object.entries(v)) {
    arr[活动] = arr[活动] ?? [];
    arr[活动].push(助力码);
    // console.log(v[活动]);
  }
}

// console.log(arr);

// 生成环境变量助力码
function 生成环境变量助力码(params) {
  for (const [活动, 助力码] of Object.entries(arr)) {
    console.log(活动, 助力码.join("@"));
    // console.log(活动);
  }
}

生成环境变量助力码();

一组数任意组合能出不同的数 位置不同也算一个 最大组合 是6
123
  123
  132

  213
  231

  321
  312

用程序的话要解决很简单一个Set集合即可，但如果能写成数学公式解决那就更美妙了

组合出来的看起来都是唯一的 如果要剔除下面认为是同一个的数有什么方法

是否有数学的方式来解决

这种方法挺好 巧妙的用数学来排除了不参与排列的数

一组数剔除其中一个的不同组合 不同位置但出现的数值相同的组合当一个 最大组合 是4
1234
  234
  134
  124
  123==132==213==231==321==312  认为是同一个

C34 = A34 / A33
A34 = 4 * 3 * 2 * 1
A33 = 3 * 2 * 1
C34 = 4



