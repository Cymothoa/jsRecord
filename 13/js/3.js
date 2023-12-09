var box = document.querySelector(".box");

box.onmousedown = function(e){
    lefts = e.clientX - box.offsetLeft;
    console.log(lefts);
    tops = e.clientY - box.offsetTop;
    console.log(tops);
    box.onmousemove = function(e){
        box.style.left = e.clientX - lefts + 'px';
        box.style.top = e.clientY - tops + 'px';
    }
}

box.onmouseup = function(e){
    box.onmousemove = null;
}