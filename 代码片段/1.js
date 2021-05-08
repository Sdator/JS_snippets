{
    async function reload(url="http://localhost:8000/main.js") {
        await import (url + "?t=" + Math.random())
        console.log(123);
    }

    function 延时(t=2000) {
        return new Promise((fun)=>{
            setTimeout(fun, t)
        }
        )
    }

    let isRun = true
    let num = 0;

    (async()=>{
        //         await 动态加载()
        //         await 延时()
        //         num += 1
        //         console.log(num);
 
        // if (isRun) {
        //     isRun = false
        //     toast('Hello, Auto.js');
        // }
    }
    )()
}
