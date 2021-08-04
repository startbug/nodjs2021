//引入其他的模块
/*
    在node中,通过require()函数引入外部的模块
        require()可以传递一个文件的路径作为参数,node会自动将根据该路径引入模块
        如果使用相对路径,必须以.或者..开头
    使用require()引入模块后,该函数会返回一个对象,这个对象表示的是引入的模块
 */
var md = require("./03.module")
var math = require("./math")
var fs = require("fs")

console.log(fs)
console.log(md)

console.log(math.add(1, 3))

console.log(math.mul(2, 3))
