{

//   星战解析坐标用

    function 到整数(坐标) {
        const [x,y] = 坐标.split("/")
        const v = y * 20 + x * 1
        return v+","+v.toString(16)
    }

    function 到坐标(num) {
        const x = num % 20
        const y = num / 20
        return x + "/" + parseInt(y)
    }

    console.log(到坐标(389))
    console.log(到整数("9/8"))
    
    console.log(到坐标(338))
  


}
