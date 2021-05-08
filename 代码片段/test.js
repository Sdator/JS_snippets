params = new URLSearchParams();

abc = {
    videoId: 123,
    signature: 455,
    clientType: 1
}
params.append(...Object.entries(abc)[0])

console.log(params.toString(),44444)


/*{
    let arr1 = [{
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        f: 5
    }, {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
        f: 6
    }];

    let arr2 = [{
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        f: 5
    }, {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
        f: 6
    }, {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
        f: 7
    }, {
        a: 2,
        b: 3,
        c: 4,
        d: 7,
        f: 6
    }];

    let arr3 = arr2.filter(v=>{
        //         首先转为字符串
        var str = JSON.stringify(v);
        //         console.log(str,typeof(str),111)
        return arr1.every(v=>{
//             console.log(v, 222)

            return JSON.stringify(v) != str
        }

        );
    }
    );
    console.log(arr3);

}
*/
