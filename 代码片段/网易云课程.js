class A {
    async get课程() {
        const body = `callCount=1
scriptSessionId=\${scriptSessionId}190
httpSessionId=3f847fddcc124945b1a2148bd4839f41
c0-scriptName=PlanNewBean
c0-methodName=getPlanCourseDetail
c0-id=0
c0-param0=string:1512007
c0-param1=number:0
c0-param2=null:null
batchId=1596223795689`

        const url = `https://study.163.com/dwr/call/plaincall/PlanNewBean.getPlanCourseDetail.dwr?${new Date().getTime()}`
        const rev = await fetch(url, {
            method: 'POST',
            body: body
        })
        const txt = await rev.text()
        //      取前部分字符串
        //         const newtxt = txt.slice(0, txt.indexOf('dwr.engine._remoteHandleCallback'))
        //       执行字符串  随便加入一个全局变量设置好拿到返回值
        const listData = eval(txt + `window['aaa']=s0;`)

        console.log(listData, 111111)

        let i = 0
        //      记录课程id和名称 用于返回
//         const data = []
//         for (const {lessonDtos} of listData) {
//             for (const {lessonName, description, chapterId, id} of lessonDtos) {
//                 data.push({
//                     "名字": lessonName,
//                     "课程ID": id
//                 })
//                 console.log(++i, `名字：${lessonName} 课程ID：${id}`)
//             }
//         }
//         return data
    }

    // 取源码
    async get源码(url) {

        // 1 读取网站源码 如果请求状态不是200-299 抛出异常并输出
        // 设置不跨域 减少报错
        const rec = await fetch(url, {
            mode: 'no-cors'
        })
        if (!rec.ok)
            throw new Error(rec.statusText)
        const body = await rec.text()
        // 2 使用虚拟dom包装源码 用于后续解析
        const el = document.createElement('html')
        el.innerHTML = body
        return el
    }

    // 取源码
    async get视频() {
        const id = await this.get课程()
//         const data = []
//         let i = 0
//         for (const {课程ID} of id) {
//             url = `https://study.163.com/course/courseLearn.htm?courseId=1512007#/learn/video?lessonId=${课程ID}&courseId=1512007`
//             data.push(get源码(url))
//             if (++i % 5 || data < 5) {
//                 await data
//             }
//             if (i > 3)
//                 break

//         }
//         console.log(await data, 44444)
    }
}

{

    const a = new A()
    a.get视频()

}
