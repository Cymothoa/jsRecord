var list = document.getElementById("list");
var btn = document.getElementById("btn");
var lis = document.getElementsByTagName("li");

btn.onclick = function(){
    var newLi = document.createElement("li");
    // 随机获取一到十的整数
    newLi.innerHTML = Math.round(Math.random()*9+1);
    list.appendChild(newLi);
}

