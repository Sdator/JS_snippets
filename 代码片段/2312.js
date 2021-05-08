// for (const {title} of document.styleSheets) {

//     if (title == "abc") {

//      console.log(2223232323)
//         //  document.styleSheets[0].insertRule('.play:before {animation: Play 1s;}',0)
//     }

// }

{

    let a = {
        a: 2,
        b: 4,
        c: 41414
    }
    let b = {
        a: 2,
        b: 4555,
        c: undefined

    }
    console.log({
        ...new Proxy({
            ...a,
            ...b,

        },{
            set(a, b, c, d) {
                console.log(555555, a, b, c, d)
            }
        })
    })

}
