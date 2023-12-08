var sum=1;
function f1()
{
    console.log(sum,"开始");
    console.log("这是第一个函数");
}
f1();

function f2()
{
    document.write("这是第二个函数");
}
f2();

function f3(a,b){
    sum=a+b;
    console.log(sum,"sum");
}
console.log(sum,"最后");
f3(10,5);