var fs = require("fs");
//检测文件是否存在
var isExists = fs.existsSync("wallhaven-6kz79q.jpg");
console.log(isExists);

//获取文件信息
fs.stat("wallhaven-6kz79q.jpg", function (err, stat) {
    console.log(stat.size);
})

fs.unlinkSync("hello3.txt");    //删除文件
