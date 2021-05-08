{
    //     document.cookie.join
    //     document.cookie.split(";")
    //     document.cookie.replace("=",":").replace(";",",")
    //     document.cookie.split("=")
    //     eval 
    //     eval("{"+document.cookie.replace(/=/g,":").replace(/;/g,",")+"}")
    //     document.cookie.match(/(?=\b)(.*?)=(.*?);/g)

    function cookies解释器(cookies=document.cookie) {

        // 分离 cookies 键值
        const patt = new RegExp(/(?=\b)(.*?)=(.*?);/,"g")
        let obj = {}
        //     匹配键值 组合为新的对象
        while ((result = patt.exec(cookies)) != null) {
            obj[result[1]] = result[2]
        }
        return obj
    }
    console.log(cookies解释器())

    BDUSS = "tYY1A3R2pMN0FXR2hHaXBrTkgxVXF2eENYTGJqeWp5fkNweDQ1RFpaTWhBbVZlSUFBQUFBJCQAAAAAAAAAAAEAAADEUCAGUlhMWkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF1PV4hdT1eQk"
    STOKEN = "b05e1e57f2a9e52a6602dc5105fd211cc9d6ae75ca6cadc52ef4a4c067181741"

    STOKEN = "b05e1e57f2a9e52a6602dc5105fd211cf81f10ed46876afc5c29cef7dd7e5f75"

    console.log(`BDUSS=${BDUSS}; STOKEN=${STOKEN}`)
}
