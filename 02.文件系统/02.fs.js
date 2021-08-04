/*
    文件系统(File System)
        - 文件系统简单来说就是通过Node操作系统中的文件
        - 使用文件系统,需要引入fs模块,fs谁核心模块,直接引入,无需下载

    同步文件的写入
        - 手动操作的步骤
            1.打开文件
                fs.openSync(path[, flags[, mode]])
                - path:文件路径
                - flags:打开文件的类型,读或写
                    w:写
                    r:读
                - mode 设置文件的操作权限,一般不传
                返回只:
                - 该方法返回一个人文件的描述符作为结果,可以通过该描述符对文件进行操作
            2.像文件内写入内容
                fs.writeSync(fd, string[, position[, encoding]])
                     - fd 文件的描述符,需要传递写入文件的描述符
                     - string 要写入的内容
                     - position 写入的起始位置
                     - encoding 编码格式

            3.保存并关闭文件
 */

var fs = require("02.文件系统/02.fs");
// console.log(fs);

//打开文件
var fd = fs.openSync("hello.txt", "w");

//像文件写入内容
fs.writeSync(fd, "水水水水水水水水水水水", 20);

//关闭文件
fs.closeSync(fd);

