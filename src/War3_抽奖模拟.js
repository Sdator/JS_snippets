/**
 * 2021.7.24  模拟魔兽3物品池
 * @param {*} num
 */
function Bingo(num = 1) {
  let str = "";
  let 计数器 = [];

  const 物品池 = [];
  for (let index = 0; index < 1000; index++) {
    物品池.push(index);
  }

  物品池.map(() => 计数器.push([]));
  //   console.log(计数器, 1111111);

  function fun() {
    const 机会值 = 物品池.reduce((a, b) => a + b);
    const 随机种子 = Math.floor(Math.random() * 机会值);
    let sum = 0;
    for (let [k, i] of 物品池.entries()) {
      sum += i;
      if (随机种子 <= sum) {
        计数器[k].push(0);
        // str +=
        //   `物品${i.toString().padStart(2)}中标`.padEnd(20) +
        //   `随机种子是${随机种子.toString().padStart(2)}`.padEnd(20) +
        //   `累加器是${sum.toString().padStart(2)}\n`;
        // console.log(
        //   `物品${i}中标\t`,
        //   `随机种子是${随机种子}`,
        //   `\t累加器是${sum}`
        //   );

        break;
      }
    }
  }
  for (let i = 0; i < num; i++) fun();

  //   Math.round(
  // (计数器.length / num) * 100 | 0

  function 求百分比(物品, 计数器) {
    const 百分比 = ((计数器.length / num) * 100)
      .toFixed(2)
      .toString()
      .padStart(6);

    return `第${(物品 + "").padStart(
      物品池.length.toString().length
    )}个物品中标次数 ${计数器.length
      .toString()
      .padStart(3)}\t几率为${百分比}%\n`;
  }

  let ss = "";
  let add = 0;
  for (const [k, v] of 计数器.entries()) {
    if (!v.length) continue;
    ss += 求百分比(k + 1, v);
    add++;
  }

  const 总结 = `
  投掷${num}次\t
  物品池为：${物品池.length < 10 ? 物品池.length : "..."}
  物品数量：${物品池.length}
  ${ss}
  `;

  console.log(总结);
  //         window.open("").document.write(`<pre>\n${str}</pre>`)
}
Bingo(100);
