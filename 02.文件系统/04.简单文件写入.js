/*
    简单文件写入
        fs.writeFile(file, data[, options], callback)
        fs.writeFileSync(file, data[, options])
            - file 操作文件的路径
            - data 要写入的数据
            - options 选项，可以对写入进行设置
            - callback 写入完成后的回调函数
 */

var fs = require("fs");

fs.writeFile("hello3.txt", "sssssszzsss", {flag: "a"}, function (err) {
    if (!err) {
        console.log("简单文件写入成功");
    }
});

