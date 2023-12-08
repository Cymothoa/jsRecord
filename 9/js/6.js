var arr=["1","2","3","4","5"];
arr.push("最后");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("第一个");
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.join('(._.)'),'join');

var burgey=["kfc","mc","burgeyking"];
var list=arr.concat(burgey);
console.log(list,'list');

var del=list.splice(2,4,'eat','131');
console.log(del,'del');
console.log(list,'list');

var newList = list.slice(2);
console.log(list,'list')
console.log(newList,'newList');

var newArr = [23,5,76,199,32,2,78,10];
function sortSB()
{
    for(var i=0;i<newArr.length;i++)
    {
        if(newArr[i]-newArr[i+1]>0)
        {
            var temp;
            temp=newArr[i];
            newArr[i]=newArr[i+1];
            newArr[i+1]=temp;
        }
    }
}
sortSB();
console.log(newArr,'newArr');