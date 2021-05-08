{
    const db = localStorage["SteamGame"] && JSON.parse(localStorage["SteamGame"]);

    const old = localStorage["SteamGameOld"] && JSON.parse(localStorage["SteamGameOld"]) || db
    let originalID = new Set(old)

    //         console.log(db, Object.prototype.toString.call(db), 11111)
    //         console.log(originalID, Object.prototype.toString.call(originalID), 2222)

    const newID = new Set()

    licenses = {
        url: "https://store.steampowered.com/account/licenses",
        // 如果当前页面是 许可和产品序列号激活 捕获ID
        GetAppID() {
            if (location.href.startsWith(this.url)) {
                // 找到所有元素转为数组 方便遍历
                [...document.querySelectorAll('a[href^="javascript:RemoveFreeLicense"]')].forEach((element)=>{
                    // 正则提取 ID
                    const match = element.href.match(/javascript:RemoveFreeLicense\( ([0-9]+), '/);
                    newID.add(match[1])
                }
                );
                console.log("已有游戏")
                localStorage["SteamGameOld"] = JSON.stringify([...newID]);
                originalID = newID
            }

        }
    }

    free = {
        url: "https://store.steampowered.com/search/?maxprice=free",
        GetAppID() {
            if (location.href.startsWith(this.url)) {
                console.log("免费游戏")
                // 获取列表中所有免费游戏
                jQuery("div[data-price-final=0]").parents("a[data-ds-appid]").each((x,y)=>{
                    //                 jQuery("#search_resultsRows>a").each((x,y)=>{

                    //                     console.log(y.dataset.dsAppid)
                    newID.add(y.dataset.dsAppid)
                    //                     console.log(y.dataset.dsAppid)
                    // s += "a/" + y.dataset.dsAppid + ","
                }
                )
            }

        }
    }
    licenses.GetAppID()
    free.GetAppID()

    // 从 originalID 原有ID中检查 新增ID的子集
    var 差集 = new Set([...newID].filter(x=>!originalID.has(x)));
    var 交集 = new Set([...newID].filter(x=>originalID.has(x)));
    var 并集 = new Set([...newID, ...originalID]);
    console.log("原有", originalID)
    console.log("新的", newID)
    console.log("新增", 差集, 差集.size + "个集卡式游戏")
    console.log("已有", 交集)
    console.log("合并", 并集, 并集.size + "个集卡式游戏")
    let num = 0
    let s = ""
    //     差集 = 并集
    const w = window.open("")
    for (let i = 0; i < 差集.size / 50; i++) {
        num += 50
        if (((i + 1) * 50) > 差集.size) {

            console.log(num - 50, 差集.size - 1, i * 50, [...差集].slice(num - 50, 差集.size))
            s = "!addlicense a/" + [...差集].slice(num - 50, 差集.size).join(',a/')
        } else {
            console.log(num - 50, num - 1, i * 50, [...差集].slice(num - 50, num))
            s = "!addlicense a/" + [...差集].slice(num - 50, num).join(',a/')
        }

        //         console.log(s)
        w.document.write(s + "<br><br><br>")

    }

    //     addlicense ASF app/292030,sub/

    //     console.log(Object.prototype.toString.call(Steam), Object.prototype.toString.call([...Steam]))
    //     localStorage["SteamGame"] = JSON.stringify([...newID])
    //     localStorage["SteamGameALL"] = JSON.stringify([...并集])

}
