{

    url = "https://sao-game.jp/special_index.php?ms_id=45"
    if (location.href.startsWith(url)) {
        $("dl").each(function() {
            const 游戏名字 = $(this).prev().text()

            console.log(游戏名字)
            $(this).find("dt").each(function() {
                const 标题 = $(this).text()
                const 内容 = $(this).next().text()
                console.log(`${标题}:${内容}`)
            })

            //             const 标题 = $(this).find("dt").text()

            //             const 内容 = $(this).find("dd").text()

        })
    }
}
