{
    /*
    $.ajax({
        type: "POST",
        url: "https://poe.game.qq.com/api/trade/search/S10%E8%B5%9B%E5%AD%A3",
        data: '{"query":{"status":{"option":"online"},"name":"兽腹","type":"连身龙鳞战甲","stats":[{"type":"and","filters":[]}]},"sort":{"price":"asc"}}',
        cache: false,
        success(data) {
            window.console.log(data)

        }
    })
*/

    var [查询物品,类型] = "西里的嗜血之矢 鲨齿箭袋".split(" ")
    //积水矿坑 5-10
    //孤岛灯塔 3-10
    //贫瘠之地 2
    //实验密室 2
//     var 查询物品= "竞技场"

    let url = "https://poe.game.qq.com/api/trade/search/S10%E8%B5%9B%E5%AD%A3"
    // 暗金
    var data = `{"query":{"status":{"option":"online"},"name":"${查询物品}","type":"${类型}","stats":[{"type":"and","filters":[]}]},"sort":{"price":"asc"}}`
//     var 查询物品="怒浪之港"
    // 地图
//     var data = `{"query":{"status":{"option":"any"},"type":{"option":"${查询物品}","discriminator":"warfortheatlas"},"stats":[{"type":"and","filters":[],"disabled":true}],"filters":{"type_filters":{"filters":{"category":{"option":"weapon.one"}},"disabled":true},"map_filters":{"disabled":false,"filters":{"map_tier":{"min":10}}}}},"sort":{"price":"asc"}}`

    fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: data
    }).then(function(response) {
        //         console.log(response)
        if (response.ok) {
            response.json().then(json=>{
                //取前9个做参考
                const arr = `/api/trade/fetch/${json.result.slice(0, 9).join()}`
                //返回物品标识组合的查询连接
                return arr
            }
            ).then(data=>{
                //                 console.log(data)
                // get读取物品信息
                fetch(data).then(data=>{
                    if (data.ok) {
                        data.json().then(data=>{
                            //                             输出价格
                            console.log(查询物品)
                            for ({item: {note}} of data.result)
                                console.log(note)
                        }
                        )
                    }

                }
                )

            }
            )
        }

    })
}

/*

                for (let o of json.result) {
                    console.log(o)
                }
                


      headers: {
            "Content-type": "application:/x-www-form-urlencoded:charset=UTF-8"
        },

*/

/*

    $.ajaxSetup({
        global: false,
        type: "POST",
        contentType: 'application/json',
    });

    */
