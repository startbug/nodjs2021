a = 10;
/*
    node中有一个全局对象,gobal,作用类似window
        在全局中创建的变量都会作为一个global的属性保存
        在全剧终创建的函数会作为global的方法保存
    当node执行模块中的代码时,它会首先在代码的最顶部,添加如下代码
    function (exports, require, module, __filename, __dirname) {
    代码底部加上右大括号
    }

    实际上模块中的代码都是包装在一个函数中执行的,并且在函数执行时,同时传递了5个实参
    exports
        - 该对象用来将变量或函数暴露在外部
    require
        - 函数,引入外部的模块
    module
        - module代表当前模块本身
        - exports就是module的属性
    __filename
        E:\WebStormWorkspace\nodejs2021\01.node\04.module.js
        - 当前模块的完整路径
    __dirname
        E:\WebStormWorkspace\nodejs2021\01.node
        - 当前模块所在文件夹的完整路径

 */
console.log(global.a)

/*
    arguments.callee
        - 这个属性保存了当前执行的函数对象
 */
console.log(arguments.callee.toString())

console.log(exports)
console.log(module.exports == exports);
console.log(__filename)
console.log(__dirname)