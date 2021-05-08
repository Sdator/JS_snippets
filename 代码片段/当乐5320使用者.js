{
    const print = console.log

    function looop(num,fun){
        for (let i = 0; i < num; i++) {
            fun()
        }
    }


    // 异步方法
    async function get() {
        const max = 10
        table = ""
        num = 0
         
        for (let i = 0; i < max; i++) {
            let url = `http://sj.lexun.cn/phone/phoneplayer.aspx?pid=6330&clubid=0&total=100&p=${i}&cd=0&lxt=45cbb3e490b3cacartqshccgq&vs=1`
            // no-cors 表示不垮域 防止304跳转跨域报错程序被终止  可以请求成功，但不好意思，你拿不到服务器返回数据，它被标记了'opaque'，请求没发出去请看控制台网络面板
            // 异步获取数据
            const response = await fetch(url,{mode:'no-cors'})
            // 转为文本
            const data = await response.text()
            name = jQuery(data).find("div.list").text((_,str)=>str+"\n")
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



}
