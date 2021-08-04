var fs = require("fs");

var rs = fs.createReadStream("wallhaven-6kz79q.jpg");
var wd = fs.createWriteStream("niubi.jpg");

//pipe()可以将读取中的内容，直接输出到可写流中
rs.pipe(wd);