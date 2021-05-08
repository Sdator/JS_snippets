  //     定义接口
    class GameID {
        url
        getAppID(url=this.url) {
            console.log(url)
        }
    }
    class A extends GameID {
        getAppID() {
            console.log(2222)
        }
    }
    class B extends GameID {
        getAppID() {
            console.log(333333)
        }
    }

    let a=new A()
    a.getAppID(location.href)
    