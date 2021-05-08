// 成品
{
//     at-x.com

    let 过滤地址 = new Map()
        //先处理得到的地址 放到map里过滤重复项 由于有键值对所以不适合使用set
    $("td a[href^='/program']").each(function() {
        let 动画名 = $(this).text()
        let url = "https://www.at-x.com" + $(this).attr("href")
            //使用url来当key直接覆盖相同的 等同过滤了重复的值
        过滤地址.set(url, 动画名)
    })

    let i = 0
    let len = 过滤地址.size
    const 关键字=["視聴年齢制限","視聴年齢制限付き","視聴年齢制限あり"]
    for (const [地址, 动画名] of 过滤地址) {
        //这里是异步执行的
        $.get(地址, function(data) {
            if (data.indexOf(关键字[0]) != -1) {
                console.log(i++, 地址, 动画名)
            }
            console.log(`共${len}，已完成`, i++)
        })

    }
}