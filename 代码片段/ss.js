{
    const print = console.log

    // 异步方法
    async function get() {
        isOK = true
        table = ""
        num = 0
        for (let i = 1; i < 1000; i++) {
            let url = `https://usky.ml/tool/api/free_s5?page=${i}&limit=10`
            const response = await fetch(url,{mode:'no-cors'})
            // no-cors 表示不垮域 防止304跳转跨域报错程序被终止  可以请求成功，但不好意思，你拿不到服务器返回数据，它被标记了'opaque'，请求没发出去请看控制台网络面板
            const data = await response.json()
            if (data.data.length == 0) {
                return
            }

            for ({server, server_port} of data.data) {
                print(server + ":" + server_port)
            }

        }

    }

    // 异步完成后再执行里面的代码
    get().then(function(data) {//         print(data)
    })
}
