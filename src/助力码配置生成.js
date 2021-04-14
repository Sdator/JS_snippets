/**
 * 助力码配置生成
 * @param {String} str 变量名 My or ForOther 开头的复制一个进来
 * @param {Array} title 生成的表单用什么结尾
 * @returns
 */
function zlmBuild(str, title = [1, 2, 3, 4, 5, "A", "B"]) {
  // 取字符串中间  前面 My|ForOther 后面任意一个 表示忽略掉最后一个字符串
  let val = str.match(/(?<=(My|ForOther)).*(?=[A-Z\d])/)[0];

  let com = "";
  let num = 0;
  let arr = title.map((v, k) => `My${val + v}=""`);

  title.forEach((v, k) => {
    for (let end of title) {
      if (end != v) com = `${com}\$\{My${val}${end}\}@`;
    }
    arr.push(`ForOther${val}${v}="${com.slice(0, -1)}"`);
    com = "";
    num++;
  });

  return arr;
}

(async (类型) => {
  const str = zlmBuild(类型);
  // 输出
  for (const v of str) {
    console.log(v);
  }
})("MyDreamFactory2");
