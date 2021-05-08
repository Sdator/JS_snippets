{

    let i = localStorage.getItem("num") || 0
    console.log(i,22222222222)

    function aa() {
        i++
        $.ajax({
            url: "http://z8yu6b.cn/index.php/daili/login/zhuce.html",
            type: "POST",
            data: {
                account: "rxlzh",
                nickname: "asd",
                password: "123456789",
                yqm: i

            },
            success: function(d) {
                localStorage.setItem("num", i);
                if (d.code || d.msg != "邀请码不存在")
                    console.log(d,"找到了")

            }
        });
    }

    setInterval(aa, 500);
}
