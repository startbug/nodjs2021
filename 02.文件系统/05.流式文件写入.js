/*
    同步、异步、简单文件吸入都不适合大文件的写入，性能较差，容易导致内存溢出
 */
var fs = require("fs");

//流式文件写入
//创建一个可写流
/*
    fs.createReadStream(path[, options])
        - 创建一个可写流
        - path 文件路径
        - options 配置的参数
 */
var ws = fs.createWriteStream("hello3.txt");

//监听open和close事件
/*
    on(事件字符串，回调函数）
        - 可以为对象绑定一个事件
    once（事件字符串，回调函数）
        - 可以为对象绑定一个一次性事件，事件触发一次之后会自动失效
 */
ws.once("open", function () {
    console.log("流启动了...");
});
ws.once("close", function () {
    console.log("流关闭了...");
})

//通过ts像文件中输入内容
ws.write("通过可写入文件的内容");
ws.write("针不挫");
ws.write("当得到");
ws.write("asdasd");
ws.write("dfffff");
ws.write("的飞跃巅峰");

//关闭流
ws.end()
