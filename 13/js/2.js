var box1 = document.querySelector(".box");
console.log(box1);
var box2 = document.querySelector(".littleBox");
console.log(box2);
var inp = document.getElementById("inp");

box1.onclick = function(){
    box1.style.background = 'paleturquoise';
    console.log("onclick");
}
box1.ondblclick = function(){
    box1.style.background = 'khaki';
    console.log("ondblclick");
}
box1.onmousedown = function(){
    box1.style.border = '1px solid red';
    console.log("onmousedown");
}
box1.onmouseup = function(){
    box1.style.border = '';
    console.log("onmouseup");
}
box2.onmouseover = function(){
    box2.style.background = '#f00';
    console.log("onmouseover");
}
box1.onmousemove = function(){
    box1.style.background = '#eee';
    console.log("onmousemove");
}
box2.onmouseout = function(){
    box2.style.background = 'pink';
    console.log("onmouseout");
}

inp.onkeydown = function(){
    console.log("onkeydown");
}
inp.onkeypress = function(){
    console.log("onkeypress");
}
inp.onkeyup = function(){
    console.log("onkeyup");
}