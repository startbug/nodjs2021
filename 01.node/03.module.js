/*
    模块化
        - 在Node中,一个js文件就是一个模块
        - 在node中,每一个js文件中的js代码都是独立运行在一个函数中
          而不是全局作用域,所以一个模块中的变量和函数在其他模块中无法访问
        - 可以通过exports暴露属性或方法
          把需要暴露的变量或者方法设置为exports属性即可
 */
console.log("这里是03模块");

exports.a = 20;
exports.b = 10;

exports.fn = function () {
}
