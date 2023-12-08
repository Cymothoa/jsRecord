var container = document.getElementById("container");
console.log(container);
var picture = document.getElementsByTagName("img");
console.log(picture);
var point = document.getElementsByTagName("li");
console.log(point);
var prev = document.getElementById("prev");
console.log(prev);
var next = document.getElementById("next");
console.log(next);

var isNow = 0;

// 抽取函数
var jump = function (ind) {
    for (var i = 0; i < point.length; i++) {
        point[i].className = '';
        picture[i].className = '';
    }
    point[ind].className = 'active';
    picture[ind].className = 'selected';
}

// 点击序号
for (var i = 0; i < point.length; i++) {
    point[i].index = i;
    point[i].onclick = function () {
        isNow = this.index;
        jump(isNow);
    }
}

// 上一页
prev.onclick=function(){
    isNow--;
    if(isNow<0){
        isNow=picture.length-1;
    }
    jump(isNow);
}

// 下一页
next.onclick=function(){
    isNow++;
    if(isNow>picture.length-1){
        isNow=0;
    }
    jump(isNow);
}

// 自动播放
var timer = setInterval(function(){
    next.onclick();
},1000)

// 鼠标滑过
container.onmousemove = function(){
    prev.style.display='block';
    next.style.display='block';
    clearInterval(timer);
}

// 鼠标移开
container.onmouseout = function(){
    prev.style.display='none';
    next.style.display='none';
    timer = setInterval(function(){
        next.onclick();
    },1000)
}