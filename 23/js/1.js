var  arr = [1,2,3];
var obj = {
    name: 'Strobo',
    age: 20,
    sex: 'female'
}
// 1.forEach
arr.forEach((element,index) => {
    console.log(element,'element');
    console.log(index,'index')
})
// 2.for in:循环的key值是下标（索引）
for(key in arr) {
    console.log(key,'key')
}
for(key in obj) {
    console.log(key,'obj');
}
// 3.for of:循环的key值是value值 常用于遍历数组
for(keys of arr) {
    console.log(keys,'keys')
}
// for(keys of obj) {
//     console.log(keys,'keys1')
// }
// 4.filter 过滤 过滤出符合条件的
let arr2 = arr.filter((element) => {
    return element >= 2;
})
console.log(arr2,'arr2');

let arr3 =[{
    name:'LiLi',
    age: 18
},{
    name:'Lucy',
    age:20
},{
    name:"XMing",
    age: 30
},{
    name:"Hua",
    age:26
}]

let arr4 = arr3.filter((ele) => {
    return ele.age > 20;
})
console.log(arr4,'arr4');

// 5.map 映射出一个新数组 通过制定函数处理数组当中的每个元素 并将处理完的元素返回到新数组中
let arr5 = arr.map((ele)=> {
    return ele*2+3;
})
console.log(arr5,'arr5');
console.log(arr,'arr');

// 6.some 若有一个值满足条件 则返回 true ；都不满足 才返回false ; 检测元素中是否有符合条件的元素
var newArr = [23,45,67,89];
let newArr1 = newArr.some((ele) => {
    return ele>80;
})
console.log(newArr1,'newArr1');

// 7.every 条件都满足则为true;有一个不满足 则为false; 检测元素中是否有符合条件的元素
let newArr2 = newArr.every((ele) =>{
    return ele < 100;
})
console.log(newArr2,'newArr2');

// 8.reduce 将元素从左到右计算总和
let newArr3 = newArr.reduce((total,num) => {
    return total + num;
})
console.log(newArr3,'newArr3');

// 9.find 找到符合条件的第一个元素并返回
let newArr4 = newArr.find((ele) => {
    return ele >30;
})
console.log(newArr4,'newArr4');

// 10.类数组转成数组 Array.from()
var lis = document.querySelectorAll("ul li");
console.log(lis,'lis');
console.log([...lis],'1');
console.log(Array.from(lis),'2');