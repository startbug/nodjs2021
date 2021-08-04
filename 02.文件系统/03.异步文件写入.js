/*
    异步文件写入
        fs.open(path[, flags[, mode]], callback)
        - 异步调用方法,结果也是通过异步函数返回
        - 回调函数的两个参数
            err 错误对象,如果没有错误则为null
            fd 文件的描述符
    fs.write(fd, string[, position[, encoding]], callback)
        - 用来异步写入一个文件

 */

//引入file system模块
var fs = require("fs");

//打开文件
fs.open("hello2.txt", "w", function (err, fd) {
    //判断是否出错
    if (!err) {
        //如果没有出错，则对文件进行写入操作
        fs.write(fd, "异步写入内容啊啊", function (err) {
            if (!err) {
                console.log("写入成功啊啊");
            }
        })
        fs.close(fd, function (err) {
            if (!err) {
                console.log("文件已关闭");
            }
        });
    } else {
        console.log(err);
    }
});



