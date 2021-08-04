/*
exports.name = "孙悟空"
exports.age = 18
exports.sayName = function () {
    console.log("孙悟空....!!!啊啊")
}
*/
/*
module.exports = {
    name: "孙悟空",
    age: 18,
    sayName: function () {
        console.log("孙悟空....!!!啊啊")
    }
};
*/

var obj = {};
obj.a = {};
var a = obj.a;
//a 和 obj.a指向的都是同一个对象
// console.log(a == obj.a)
a.name = "lhh";
a = new Object()
console.log(obj.a.name);
console.log(a.name);
