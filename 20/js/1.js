// var a = 100;
var c='111';
console.log(c,'c');

console.log(b,'b');

function fn1() {
    var c = 10;
    console.log(c,'函数中')
}
fn1();
let a1 = 10;
let b1 = 20;
a1 = 30;
b1 = 40;
console.log(a1,b1,'打印');

console.log(c,'c1');

var a2 = true;
if(a2) {
    let x = 100;
}

for(var i=0;i<10;i++) {
    console.log(i,'ii')
}
console.log(i,'22')

console.log(a,'a');
var a = 10;
console.log(a,'a1');

const PI = 3.14;
console.log(PI,"PI")
for(let I = 0;I<10;I++) {
    console.log(I,'I')
}
console.log(I,'2')

var arr = [1,2,3];
var [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);

var obj = {
    name1: 'LiLi',
    age: 18,
    address: function() {
        console.log("地址")
    }
}

var {name1,age,address} = obj;
console.log(name1);
console.log(age);
console.log(address);

var str = 'awq';
var [x,y,z] = str;
console.log(x);
console.log(y);
console.log(z);

// 形参
function fn1(name2,age2) {
    console.log(name2,'func1')
    console.log(age2,'func2')
}
// 实参
fn1({nam2:"LiLi"},{age2:20});

function fn2() {
    return {
        name3: 'Lucy',
        age3: 25
    }
}
var {name3,age3} = fn2();
console.log(name3)
console.log(age3)

let f1 = (...ar) => 
console.log(ar,'实例') ;

f1(100,1000);

let person1 = function(name) {
    this.name = name;
    console.log(this.name,'名字')
};

var p1 = new person1('aa');
console.log(p1,'p1')

let person2 = (age) => {
    this.age = age;
    console.log(this.age,'年龄');
} 
var p2 = new person2(30);
console.log(p2,'p2');