{
    //正则高级使用 遍历器组合析构
    let a = "驗證全碼】    17b6e4a828d4242fc4a507f3834364ed44fa8f8a".matchAll(/(?<dff>[A-z0-9]+)/g)
    for (let {groups: {dff}} of a) {
        console.log(dff)
    }

    s = "驗證全碼】    17b6e4a828d4242fc4a507f3834364ed44fa8f8a"

    const {groups: {claa}} = s.match(/(?<claa>[A-z0-9]{40})/)??s.match(/(?<claa>[A-z0-9]{32})/)
    console.log(claa, 1111111)

}
