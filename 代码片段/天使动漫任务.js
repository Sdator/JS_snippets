// fetch("https://www.tsdm39.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "en,zh-CN;q=0.9,zh;q=0.8,und;q=0.7",
//     "cache-control": "no-cache",
//     "content-type": "application/x-www-form-urlencoded",
//     "pragma": "no-cache",
//     "sec-fetch-dest": "iframe",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "same-origin",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrer": "https://www.tsdm39.net/plugin.php?id=dsu_paulsign:sign",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": "formhash=c3d17206&qdxq=ch&qdmode=3&todaysay=&fastreply=1",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });

(async()=>{

    const req = await fetch("https://www.tsdm39.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1", {
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
        },
        "body": "formhash=c3d17206&qdxq=ch&qdmode=3&todaysay=&fastreply=1",
        "method": "POST",
    });

    const body = await req.text()
    console.log(body)
}
)()
