{

    const e = $$("a[href*=github]")
    let 条目 = []
    let 去重 = new Set()

    for ({href} of e) {
        条目.push(href)
        去重.add(href)
    }

    //     交集
    //     const 交集 = new Set(条目.filter(a=>去重.has(a)))
    const 差集 = new Set(条目.filter((v,i)=>{
        console.log(去重.has(v),v)
//         return i > 条目.length
    }))

     console.log(去重.size, 条目.length)
//  !去重.has(a)
//     console.log(差集.size)

}

