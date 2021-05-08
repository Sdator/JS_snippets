var eve
// 获取鼠标在画布 canvas 上的位置
function getP(canvasDom) {
    canvasDom.onclick = function(e) {
        eve = e
        console.log(e)
        var eventObj = {
            x: e.pageX,
            y:  e.pageY,
            type: 'click'
        };
        console.log(eventObj)
        //             fire(eventObj);
    }
}

const canvas = $("canvas")
getP(canvas)
