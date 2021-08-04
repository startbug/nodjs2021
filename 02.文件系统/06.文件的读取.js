/*
    简单文件读取
        fs.readFile(path[, options], callback)
        fs.readFileSync(path[, options])

 */

var fs = require("fs");

fs.readFile("wallhaven-6kz79q.jpg", function (err, data) {
    // data是一个buffer
    if (!err) {
        // console.log(data.toString());
        //写出文件
        fs.writeFile("newpaper.jpg", data, function (err) {
            if (!err) {
                console.log("图片复制成功！！！")
            }
        })
    }
})


