/*
    Buffer缓冲区
        - Buffer的结构和数组很像,操作的方法也和数组类似
        - 数组不能存储二进制文件,而buffer就是专门存储二进制数据的
        - 使用buffer不需要引入模块,直接使用即可
        - buffer存储的都是二进制,但是打印出来的时候是以16进制的形式显示
            buffer中每个元素的范围是从00 - ff
 */
var str = "你好"

//将字符串保存到buffer中
var buf = Buffer.from(str);

// console.log(buf);
//
// console.log(str.length);    //占用内存的大小
// console.log(buf.length);    //字符串的长度

//创建一个指定大小的buffer
// var buf2 = new Buffer(10);    // 数字单位是字节,该方式已经弃用
// console.log(buf2.length);

//创建10个字节的buffer
var buf3 = Buffer.alloc(10);
//赋值
// buf3[0] = 88;   //打印会转换成16进制
// buf3[1] = 255;
// buf3[2] = 0xbb;
// buf3[3] = 257;
//
// //只要数字在控制台或者页面输出,一定会转换成10进制
// //toString指定转换成16进制
// console.log(buf3[0].toString(2));
//
// for (let i = 0; i < buf3.length; i++) {
//     console.log(buf3[i]);
// }


//Buffer.allocUnsafe(size) 创建一个指定大小的Buffer,但是buffer中可能含有敏感数据
var buf4 = Buffer.allocUnsafe(10);
console.log(buf4);
