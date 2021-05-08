//输出测试用
{
    const locData = JSON.parse(window.v["lscache-tradedata"]);
    let i = 0;
    //用map的键值特性来过滤不值钱的货币
    for (const {text} of locData.currency) {
        //读取本地数据
        console.log(++i, text)
    }
}
