/*
		By:Air   QQ:250740270 2020.3.7
		脚本来自: https://steamdb.info/freepackages/
		GitHub: https://github.com/Sdator/SteamFreeGameID
*/
// 1. 打开页面 https://store.steampowered.com/account/licenses
// 2. 谷歌浏览器按 F12 单击 Console 标签打开控制台
// 3. 从免费 ID 文档中复制一段替换下面已有的 ID ，一小时内限制激活50个 我已经分好了
// 4. 替换 ID 后把 ctrl+a 全选所有代码 ctrl+c 复制
// 5. 回到谷歌浏览器的控制台粘贴》回车 等待激活
// 6. 一小时后再复制第二段游戏 ID 替换下方 重复 3-5 步骤

(function() {
    // 如果当前页面不是 许可和产品序列号激活 页面则跳到页面
    if (!location.href.startsWith('https://store.steampowered.com/account/licenses')) {
        alert('Please run this on Steam\'s account licenses page.');

        window.location = 'https://store.steampowered.com/account/licenses/';

        return;
    }
    // 把游戏ID覆盖到这里

    let freePackages = new Set([
    365070,264120,828170,335430,334030,263500,207230,203290,331580,572660,789390,744340,480580,501170,359860,284500,314860,432290,381640,466660,321330,239660,531960,283060,461910,619310,388370,378370,414730,250420,486460,643980,513000,533690,451230,511800,705810,861920,673940,374670,1205930,1182230,975380,958710,1001290,807500,807490,807480,807470,807460

    ]);

    // -- 从列表中删除已经激活过的游戏
    // 枚举所有存在ID的元素
    [...document.querySelectorAll('a[href^="javascript:RemoveFreeLicense"]')].forEach((element)=>{
        // 正则提取 ID
        const match = element.href.match(/javascript:RemoveFreeLicense\( ([0-9]+), '/);
        // 如果ID不为空 和列表中的ID进行差集
        if (match !== null) {
            freePackages.delete(+match[1]);
        }
    }
    );

    let loaded = 0;
    // 调用steam接口 显示对话窗口
    let modal = window.ShowBlockingWaitDialog('Executing…', 'Please wait until all requests finish. Ignore all the errors, let it finish.');
    // 闭包
    const fetched = (res)=>{
        // 关闭窗口？
        modal.Dismiss();

        // 如果 激活次数 大于 未激活 的游戏数量则关闭窗口并刷新页面
        if (++loaded >= freePackages.length) {
            modal = window.ShowBlockingWaitDialog('Reloading…', 'Keep in mind only 50 packages can be activated per hour.');
            // 刷新当前页面
            location.reload();
        } else {
            // 更新提示窗口信息
            modal = window.ShowBlockingWaitDialog('Executing…', `Loaded <b>${loaded}</b>/${freePackages.length}.`);
        }
    }
    ;
    // 返回 游戏列表 转成数组
    freePackages = [...freePackages].slice(-50);
    // 迭代 游戏列表 
    for (const subid of freePackages) {
        // post 发送激活操作
        // 不管成功还是失败 调用闭包函数 fetched 改变提示窗口信息
        window.jQuery.post('https://store.steampowered.com/checkout/addfreelicense/' + subid, {
            ajax: true,
            sessionid: window.g_sessionID,
        }).always(fetched);
    }
}());
