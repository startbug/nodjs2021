/*
    流式文件读取适用于较大文件，多次将文件读取到内存中
 */

var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("newpaper.jpg");
//创建一个可写流
var ws = fs.createWriteStream("hhhha.jpg");

//监听开启和关闭
rs.once("open", function () {
    console.log("可读流打开了。。。")
})

rs.once("close", function () {
    console.log("可读流关闭了。。。")
    //数据读取完后，顺带把可写流关闭
    ws.end();
})

//如果尧都区一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，会自动开始读取数据
rs.on("data", function (data) {
    ws.write(data);
})


