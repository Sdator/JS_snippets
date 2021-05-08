GetType = Object.prototype.toString
echo = print = console.log
$$ = $$

延迟 = (time = 500) => new Promise((resolve) => {
    setTimeout(resolve, time)
})

// 总结：匿名函数的最主要作用是创建闭包，闭包就是将函数内部和函数外部连接起来的一座桥梁。
// 内层的函数可以使用外层函数的所有变量，即使外层函数已经执行完毕。闭包可以用来模仿块级作用域等等。

递增器Ex = () => {
    let i = 0;
    return () => i++
}

// 实现了 Symbol.iterator 属性即可遍历
递增器 = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: function () {
                i = i < 5 ? i : 0
                return { value: i++, done: false }
            }
        }
    }
};


class A {
    // 读取本地数据 首次执行没有 需要初始化
    商品状态 = localStorage["商品状态"] ? JSON.parse(localStorage['商品状态']) : { ERR: [], OK: [] }
    页面状态 = localStorage["页面状态"] ? JSON.parse(localStorage['页面状态']) : { ERR: [], OK: [] }
    当前进度 = Number(localStorage["进度"]) || 1


    状态写入本地() {
        localStorage["进度"] = this.当前进度 += 1
        localStorage['商品状态'] = JSON.stringify(this.商品状态)
        localStorage['页面状态'] = JSON.stringify(this.页面状态)
    }

    /**
     * 用于读取网站返回数据并转为 text 文本，存进虚拟dom中用于后续处理
     * @param {string} url  要读取的网址
     */
    async 取源码(url) {
        const rallBase = Math.random()
        const roll = Math.ceil(Math.random() * 10);
        await 延迟(roll * 100 + rallBase * 10)

        // 1 读取网站源码 如果请求状态不是200-299 抛出异常并输出
        const rec = await fetch(url)
        if (!rec.ok)
            throw new Error(rec.statusText)
        const body = await rec.text()
        // 2 使用虚拟dom包装源码 用于后续解析
        const el = document.createElement('html')
        el.innerHTML = body
        return el
    }

    async a取音频() {
        let arr = $$("div ol li")
        let标题 = $$(".work-header .work-name")[0].outerText
        for (let { dataset: { src: url, title: 标题, playtime: 时长 } } of arr) {
            echo(标题, 时长, url)
        }
    }

    async 取视频(url) {
        echo(url, "读取中...")
        // 做一个错误处理 成功或失败访问记录到数组中
        try {
            const el = await this.取源码(url)
            this.商品状态.OK.push(url)

            // 读取视频源
            const arr = $$("source", el)
            let max = 0
            let a下载地址 = ""
            // 取质量最高的视频下载链接
            for (let { src, dataset: { width } } of arr) {
                // 转数值类型  因为字符串无法运算
                let num = Number(width)
                if (num > max) {
                    max = num
                    a下载地址 = src
                }
            }
            let a标题 = $$(".work-name h1", el)[0].innerText
            return {
                标题: a标题,
                下载地址: a下载地址
            }
        } catch (err) {
            this.商品状态.ERR.push(url)
            console.error("商品获取失败:", url, err)
        }
    }
    /**
     * 
     * @param {string} url 要获取源码的页面地址
     */
    async Get取页面商品(url) {
        echo("读取所有商品...")
        try {
            const el = await this.取源码(url)
            this.页面状态.OK.push(url)
            // 判断是否最后一页
            // 读取当前页所有商品连接 并
            const dom = $$(".work-work-name a", el)
            print(dom, 111111111111)
            if (!dom) {
                throw new Error("没有商品了")
            }
            // 返回一个包含所有商品连接的数组
            return dom.map(({ href }) => href)
        } catch (error) {
            this.页面状态.ERR.push(url)
            console.error("页面获取失败:", url, err)
        }
    }
    /**
     * 
     * @param {Array} arr 包含商品连接的数组
     */
    async 线程限制(arr) {
        const data = []
        // 触发所有异步操作 取部分连接测试
        const promises = arr.map(url => this.取视频(url))
        // 异步完成后 遍历promise对象添加返回数据
        for (const v of promises) {
            data.push(await v)
        }
        return data
    }

    列出本地信息() {
        const set = (localStorage["vd_2d"] ? JSON.parse(localStorage["vd_2d"]) : []).flat()
        // 由于第一个元素为null导致遍历出错 这里给他初始化一下
        set[0] = []
        let 条目 = ""
        for (const { 标题, 下载地址 } of set) {
            // print(标题, 下载地址)
            条目 += `<tr><td>${标题}</td><td>${下载地址}</td></tr>`
        }
        const table = `
            <table>
                <tr>
                    <th>标题</th>
                    <th>下载地址</th>
                </tr>
                    ${条目}
            </table>`
        window.open("").document.write(table)
    }

    构建页面() {
        let num = 0
        // 用属性名是否存作逻辑判断 
        // if (data) {
        //     url.true = true
        // }
        //  "true" in url
        return `https://chobit.cc/s?f_category=vd_2d&s_page=${page}`
    }

    async 收集网页() {
        let i = 0
        const 步进 = 5

        // const num = 递增器[Symbol.iterator]()
        // print(num.next().value)
        // print(num.next().value)
        // print(num.next().value)

        const arr = []
        for (const page of 递增器) {

            print(page)
            if (i > 20) {
                break
            }

            // arr.push(`https://chobit.cc/s?f_category=vd_2d&s_page=${page + 1}`)
            // this.Get取页面商品(url)

            // // 当页数是 5 的倍数时候
            // if (not(page % 5)) {
            //     arr.map((url) => {

            //     })
            //     arr = []

        }

        // 递增器默认是 0 开始，页面0和1 是一样的 所以这里+1跳过0页


        // this.线程限制(arr.slice(i * t - t, i * t))
        // if (i > max) {
        //     break
        // }

    }


    /**
     * 1. 获取特定页面包含的所有商品连接
     * 2. 根据商品连接数量分批次进行读取
     * 3. 最后返回读取到的视频连接
     * @param {number} page 打开的页数
     */
    async Get特定页视频(page = 1) {
        let url = `https://chobit.cc/s?f_category=vd_2d&s_page=${page}`
        const arr = await this.Get取页面商品(url)
        const max = arr.length
        // 分 x 步完成整个页面的爬取
        const x = 5
        // 伪线程数量 步进  t 越大一次性访问的网站数量就越多
        let t = max / x
        // 用于存放返回的数据
        const data = []
        for (let i = 1; i <= x; i++) {
            //  每次读取 t 个页面 并压平放到 data 数组中
            data.push(...await this.线程限制(arr.slice(i * t - t, i * t)))
            //   const end = i * t > max ? max - 1 : i * t
            print(arr.slice(i * t - t, i * t), i * t - t, i * t)
            print(i, "完成")
        }
        // 初始化对象
        const set = localStorage["vd_2d"] ? JSON.parse(localStorage["vd_2d"]) : []
        set[page] = data
        localStorage["vd_2d"] = JSON.stringify(set)
        return data
    }

    /**
     * 获取所有页面的视频 默认读取一页
     * @param {number} max 获取页数
     */
    async Get所有视频(max = 1) {
        // 从进度继续开始
        let i = this.当前进度

        print("当前进度：第", i + " 页")
        const data = []
        while (true) {
            print(i)

            data.push(...await this.Get特定页视频(40))

            // this.状态写入本地()
            i++
            if (i > max) {
                break
            }
        }
        return data
    }
}






// 自运行异步fun
(async () => {

    const a = new A()
    const url = "https://chobit.cc/1m5wq"
    // const data = await a.Get所有视频(40)

    a.收集网页()
    // a.状态写入本地()
    // a.列出本地信息()


    //=================================
    // 递增器 使用方法
    // let i = 0
    // for (const v of 递增器) {
    //     i++
    //     if (i > 5) {
    //         break
    //     }
    //     print(v)
    // }
    //=================================



    //=================================
    // 延时测试
    // num = 0
    // while (num < 10) {
    //     console.time("strat")
    //     const rallBase = Math.random()
    //     const roll = Math.ceil(Math.random() * 10);
    //     // await 延迟(roll * 100 + rallBase * 100)
    //     print(rallBase*1000)
    //     console.timeEnd("strat")
    //     num++
    // }
    //=================================
}
)()
