{
    if (location.href.startsWith('http://www.tenaa.com.cn/WSFW/afterSaleService.aspx')) {
        //     const w = window.open("")
        let s = ""
        $$("#DDLPP>option").forEach(v=>s += v.value + "\t;")

        //     w.document.write(s)

        window.open("").document.write(s);
    }
}
