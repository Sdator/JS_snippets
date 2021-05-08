{
    $.ajax({
        url: "https://fantia.jp/api/v1/fanclubs/3038",
        cache: false,
        dataType: "json",
        success(data) {
            window.console.log(data)
            // window.console.log(data.fanclub.recent_posts)
            let str = ""
            for (const arr of data.fanclub.recent_posts) {
                let { title: 标题,thumb:{large:图组,thumb}  } = arr
                window.console.log(thumb)

                // str = str + "\n" + 标题
                // for ([, 地址] of Object.entries(图组)) {
                //     // str = str + "\n" + 地址
                //     window.console.log(地址)
                // }

                // window.console.log(图组)
            }
            // window.console.log(str)

        }
    })
}

