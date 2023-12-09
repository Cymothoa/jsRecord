var box = document.getElementById("box");
console.log(box.nodeName);
console.log(box.nodeType);
console.log(box.childNodes[1].innerHTML);
// innerHTML 包含html标签
// innerText 不包含html标签
// childNodes[num] 子节点
// 节点值
// nodeValue
var first = document.getElementById("first");
// 创建元素 createElement
var a = document.createElement("span");
console.log(a);
a.innerHTML = '新的元素';
console.log(a);
// box.insertBefore(a,b);
// 插入
// insertBefore(参数1，参数2)；
// 参数1 要插入的当前元素
// 参数2 项参数2中添加参数一的内容
first.insertBefore(a,first[0])
var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerHTML = '列表1';
console.log(ul,'ul');
console.log(li,'li');
// 添加 appendChild
ul.appendChild(li);
console.log(ul);
box.appendChild(ul);
var news = document.createElement('b');
news.innerHTML = '字体';
box.insertBefore(news,box[0]);
//删除 removeChild
// box.removeChild(ul);
var h2 = document.createElement("h2");
h2.innerHTML = '这是一个标题';