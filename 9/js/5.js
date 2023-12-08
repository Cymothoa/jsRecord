// 生成新的空数组
var arr = new Array();
var arr = [];
// 生成新的空对象
var obj2 = new Object();
// var data = new Date();
// console.log(data,'data')
obj2.name = '我的';
console.log(obj2,'obj2');
// 创建一个对象 对象的声明
var obj1 = {};
var obj = {
    name: '麦当劳',
    sex: '女',
    age: '香辣鸡腿堡'
}
// 对象的使用
// 对象名.属性名 = 属性值
console.log(obj.name);
console.log(arr);

console.log(typeof arr);//Object
console.log(typeof obj);//Object

var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象
// 请避免字符串、数值或逻辑对象。他们会增加代码的复杂性并降低执行速度。

var aa = 1;
console.log(typeof aa);

console.log(typeof x,'x');
console.log(typeof y,'y');
console.log(typeof z,'z')
console.log( x,'x1');
console.log( y,'y1');
console.log( z,'z1')