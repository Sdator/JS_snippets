{
    const print = console.log

    // 异步方法
    async function get() {
        const max = 1200
        table = ""
        num = 0
        for (let i = 1000; i < max; i++) {
            let url = `http://bbs.9game.cn/forum-${i}-1.html`
            const response = await fetch(url,{mode:'no-cors'})
            // no-cors 表示不垮域 防止304跳转跨域报错程序被终止  可以请求成功，但不好意思，你拿不到服务器返回数据，它被标记了'opaque'，请求没发出去请看控制台网络面板
            print(i, response.ok)
 
            const data = await response.text()
            name = jQuery(data).find("#forumnametext").text()
            //名字为空跳过循环
            if (!name)
                continue
            print(name)
            table += `<tr><td>${i}</td><td>${name}</td></tr>`
        }
        return table
    }

    //     异步完成后再执行里面的代码
    get().then(function(data) {
        print(data)
        table = `<table>
                            <tr>
                            <th>序号</th>
                            <th>游戏</th>
                            </tr>
                             ${data}
                            </table>`
        window.open("").document.write(table)
    })

    //     fetch("http://bbs.9game.cn/forum-51-1.html", {
    //         mode: 'no-cors',
    //         // no-cors, cors, *same-origin
    //     }).then(function(data) {
    //         print(data)
    //     })

}
