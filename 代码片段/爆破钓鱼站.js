
{


    class 随机数 {
        constructor() {

        }

        /* 范围随机数 */
        ran(min, max) {
            parseInt(Math.random() * (max - min + 1) + min, 10);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        /** 随机生成固定位数或者一定范围内的字符串数字组合
     * @param {Number} min 范围最小值
     * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
     * @param {String} charStr指定的字符串中生成组合
     * @returns {String} 返回字符串结果
     * */
        randomRange(min, max, charStr) {
            var returnStr = "", //返回的字符串
                range;
            //生成的字符串长度
            //随机生成字符
            var autoGetStr = function () {
                var charFun = function () {
                    var n = Math.floor(Math.random() * 62);
                    if (n < 10) {
                        return n;
                        //1-10
                    } else if (n < 36) {
                        return String.fromCharCode(n + 55);
                        //A-Z
                    } else {
                        return String.fromCharCode(n + 61);
                        //a-z
                    }
                }
                while (returnStr.length < range) {
                    returnStr += charFun();
                }
            };
            //根据指定的字符串中生成组合
            var accordCharStrGet = function () {
                for (var i = 0; i < range; i++) {
                    var index = Math.round(Math.random() * (charStr.length - 1));
                    returnStr += charStr.substring(index, index + 1);
                }
            };
            if (typeof min == 'undefined') {
                min = 10;
            }
            if (typeof max == 'string') {
                charStr = max;
            }
            range = ((max && typeof max == 'number') ? Math.round(Math.random() * (max - min)) + min : min);
            if (charStr) {
                accordCharStrGet();
            } else {
                autoGetStr();
            }
            return returnStr;
        }
    }

    class 爆破 {
        
        formData = ""
        //Student  构造函数
        constructor(num) {
            this.num = num;
        }

        开始(循环次数, 随机数) {

            let i = localStorage.getItem("num") || 852
        
            for (let index = 0; index < 循环次数; index++) {

                let formData = `u=${随机数.ran(25648, 9999999999)}&p=${随机数.randomRange(9, 16)}&bianhao=${i++}`
//                 console.log(i,22222)
                console.log(formData)
                fetch("2019.php", {
                    method: "post",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "Cache-Control": "max-age=0"
                    },
                    body: formData
                })

            }
            localStorage.setItem("num", i);
        }

    }

    const a = new 爆破()
    const 随机 = new 随机数()



   setInterval(()=>a.开始(1, 随机),3000);
    


}

