{
    var direct = 'DIRECT;';

    var proxy = "PROXY server01.pac.itzmx.com:25;";

    var hasOwnProperty = Object.hasOwnProperty;

    domains = {
        "360.cn": 1,
        "baidu.com": 1
    }

    function FindProxyForURL(url, host) {
        if (host == "www.so.com") {
            return "PROXY 360.itzmx.com:80";
        }

        var suffix;
        var pos = host.lastIndexOf('.');
        //提取最后一个 . 的位置  www.so.com  6
        while (1) {
            suffix = host.substring(pos + 1);
            console.log(suffix,pos)

            // www.so.com 提取出 com*
            if (suffix == "360.cn")
                // 看样子条件写错了 suffix永远都不会等于360.cn
                if (url.indexOf('http://') == 0)
                    return "PROXY 360.itzmx.com:80";
            if (hasOwnProperty.call(domains, suffix)) {
                //如果 360.cn 是 domains 字典的 键值  则使用代理访问
                return proxy;
            }
            if (pos <= 0) {
                break;
            }
            pos = host.lastIndexOf('.', pos - 1);

        }
        return direct;
    }

    str = FindProxyForURL("www.abc.com", "www.360.cn")
    console.log(str)

}
