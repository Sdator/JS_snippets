(async()=>{

    const url = 'https://bbs.zjbl.qq.com/ajax/signIn'
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            "X-Requested-With": "XMLHttpRequest"
        })

    })
    const json = await response.json()
    console.log(Object.prototype.toString.call(response.headers))

    for (let v of response.headers) {
        console.log(v)
    }

    if (json.ret < 0) {
        console.log("签到失败")

        return
    }
    console.log(json)
    console.log("签到成功")
}
)()
