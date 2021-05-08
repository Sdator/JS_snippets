// ==UserScript==
// @name                小H片
// @author              絕版大叔丶
// @namespace           https://github.com/Sdator/MyCode/tree/master/Js/%E6%9A%B4%E5%8A%9B%E7%8C%B4
// @icon                https://avatars3.githubusercontent.com/u/17621623?s=40&v=4
// @version             1.0
// @match               *://chobit.cc/*
// @description         学习
// @updateURL           http://localhost:8000/chobit.cc.user.js
// @downloadURL         http://localhost:8000/chobit.cc.user.js
// @run-at              document-end
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               GM_setValue
// @require             https://cdnjs.loli.net/ajax/libs/jquery/3.4.1/jquery.js
// @contributionAmount  10软妹
// ==/UserScript==

// console.log($("div"), [window?.$, window?.$$, window?.jQuery])
{




// 释放 符号 $ 的占用
$?.noConflict()

const $$ = window?.jQuery ?? $

// console.log($$("div"), [window?.$, window?.$$, window?.jQuery])
// return

const GetType = Object.prototype.toString
const echo = print = console.log



const 延迟 = (time = 500) => new Promise((resolve) => {
    setTimeout(resolve, time)
})

// 总结：匿名函数的最主要作用是创建闭包，闭包就是将函数内部和函数外部连接起来的一座桥梁。
// 内层的函数可以使用外层函数的所有变量，即使外层函数已经执行完毕。闭包可以用来模仿块级作用域等等。




/**
 * 无限遍历器 
 * 1. 可无限生成自然数
 * 2. 类似无限循环的作用
 * 3. 实现了 Symbol.iterator 属性即可遍历
 * @param {Number} strat 起始数值 默认为0
 */
const 无限递增器 = (strat = 0) => {
    return {
        [Symbol.iterator]: function () {
            let i = strat;
            return {
                next: function () {
                    return { value: i++, done: false }
                }
            }
        }
    }
}


const 递增器Ex = () => {
    let i = 0;
    return () => i++
}

const 限定递增器 = (str = 0, end = 5) => {
    return {
        [Symbol.iterator]: function () {
            let i = str;
            return {
                next: function () {
                    i = i < end ? i : str
                    return { value: i++, done: false }
                }
            }
        }
    }
}



class A {
    // 把旧的类保存起来
    // 如果本地没有存放 2D 这条数据 使用空对象代替
    oldA = JSON.parse(localStorage?.['2D'] ?? "{}")

    // 读取本地数据 首次执行没有 需要初始化
    商品状态 = oldA?.商品状态 ?? { ERR: [], OK: [] }
    页面状态 = oldA?.页面状态 ?? { ERR: [], OK: [] }

    地址 = oldA?.地址 ?? []
    INFO = oldA?.INFO ?? []

    当前进度 = oldA?.进度 ?? 1

    地址列表 = []

    constructor() {
        print("对象初始化")
    }

    状态写入本地() {
        // 把当前实例 写进本地
        localStorage['2D'] = JSON.stringify(this)

        // 去重复
        // this.页面状态.OK = [...new Set(this.页面状态.OK)]
        // this.页面状态.ERR = [...new Set(this.页面状态.ERR)]
        // this.商品状态.OK = [...new Set(this.商品状态.OK)]
        // this.商品状态.ERR = [...new Set(this.商品状态.ERR)]

        // print(this.商品状态, this.页面状态, GetType(this.页面状态.ERR))

        // localStorage["进度"] = this.当前进度
        // localStorage['商品状态'] = JSON.stringify(this.商品状态)
        // localStorage['页面状态'] = JSON.stringify(this.页面状态)
        // localStorage["地址"] = JSON.stringify(this.地址)
        // localStorage["INFO"] = JSON.stringify(this.INFO)
    }

    /**
     * 用于读取网站返回数据并转为 text 文本，存进虚拟dom中用于后续处理
     * @param {string} url  要读取的网址
     */
    async 取源码(url) {
        // const rallBase = Math.random()
        // const roll = Math.ceil(Math.random() * 10);
        // await 延迟(roll * 100 + rallBase * 10)

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
            // 没有读取到 抛出错误并返回
            if (!dom.length) {
                throw new Error("没有商品了")
            }
            // 返回一个包含所有商品连接的数组
            return dom.map(({ href, innerText }) => { return { href, innerText } })
        } catch (err) {
            this.页面状态.ERR.push(url)
            console.error("页面获取失败:", url, err)
        }
    }
    /**
     * 类线程效果
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

    /**
     * 获取所有页面的视频地址
     */
    async 收集网页() {
        // 用于存放 异步 返回数据
        const data = []
        const 步进 = 2
        // 修改开始数值不用老+1
        for (const page of 无限递增器(1)) {
            // 直接触发异步访问 把异步结果放到 data数组中
            // data.push({ "页面": page, "内容": this.Get取页面商品(`https://chobit.cc/s?f_category=vd_2d&s_page=${page + 39}`) })
            data[page] = this.Get取页面商品(`https://chobit.cc/s?f_category=vd_2d&s_page=${page + 38}`)
            this.当前进度 = page
            // 测试限制用
            print("page", page)

            // 当页数是 步进 的倍数时候  就中断一次
            if (!(page % 步进)) {
                try {
                    // print("直接返回", data)
                    // 暂停主线程等待异步结果再继续下一次访问
                    // for (const { 内容 } of data) {
                    for (const v of data) {
                        await v
                        // await 内容

                        // 如果为空 从数组中删除 并跳过这次循环
                        // const status = await v
                        // if (status == undefined) {
                        //     print("跳过")
                        //     continue
                        // }
                    }
                    print("中断等待结果")
                } catch (error) {
                    console.error("没有了", error, "爬完成")
                    break
                }
            }
            if (page >= 4) {
                break
            }
        }
        print(data, 33333333333)
        //  保存某页中所包含的地址
        // 1 遍历所有异步完毕的数据 
        // 2 并存放到新的变量中
        // 3 过滤空白的数组
        let urls = []
        await data.map(async (v, k) => {
            const data = await v
            if (data) {
                urls[k] = data
            }
        })
        // 压平并过滤生成相同的键值对 最后扩展加入到数组
        // this.地址.push(...new Set(urls.flat()).entries())
        this.地址.push(...urls.flat())

        // entries
        // abcd = data.filter(v => false)
        // this.地址 = urls
        // print(this.地址, 3333)
    }

}


// 最近写js插件碰到一个需求，需要在插件运行中动态加载其他域的JS文件，你以为完了? 还没 当JS文件文件发生了改变需要重新加载这个文件，而非缓存。
// 当 import() 重复读取模块会有一个问题每次都从缓存中读取相同的模块信息，一开始我以为是服务器问题，当我把服务器的缓存关闭后发现问题依在。
// import 这个机制对于发布版有很大好处，但不利于开发阶段做测试。虽然我有很多话想说但是直接贴代码直接点吧。
// 大致原理就是利用了古老的办法随机地址解决访问缓存问题实现每次执行函数都会去重新读取文件。

// 这个有什么用呢？ 实时修改所见即所得，类似lua中的热更(reload)效果, 
// 注：由于我目前还没发现更好的重载方法，此方法只适合用于开发阶段测试，切勿用于发布阶段，可能会导致内存泄露。


/** 
 * 动态加载
 */
reload = async (url = "http://localhost:8000/chobit.cc.user.js") => {
    await import(url + "?t=" + Math.random())
}





/** 
 * 自运行异步fun
 */
(async () => {

    // 改为全局变量用于测试
    a = new A()

    // const data = await a.Get所有视频(40)

    await a.收集网页()
    a.状态写入本地()

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
}