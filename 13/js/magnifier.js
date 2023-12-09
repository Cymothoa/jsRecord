var small = document.getElementById("small");
var drag = document.getElementById("drag");
var big = document.getElementById("big");
var bokuto = document.getElementById("bokuto");
// 鼠标移入移出
small.onmouseover = function(){
    drag.style.display = 'block';
    big.style.display = 'block';
}
small.onmouseout = function(){
    drag.style.display = 'none';
    big.style.display = 'none';
}

// 鼠标移动
small.onmousemove = function(e){
    // drag移动
    var lefts = e.clientX - drag.offsetWidth/2 ;
    var tops = e.clientY - drag.offsetHeight/2 ;
    drag.style.left = lefts + 'px' ;
    drag.style.top = tops + 'px' ;
    // 判断最大移动范围
    var maxWidth = small.offsetWidth - drag.offsetWidth ;
    var maxHeight = small.offsetHeight - drag.offsetHeight ;
    if(drag.offsetLeft <= 0)
    {
        drag.style.left = 0 ;
    }
    if(drag.offsetTop <= 0)
    {
        drag.style.top = 0 ;
    }
    if(drag.offsetLeft >= maxWidth )
    {
        drag.style.left = maxWidth + 'px' ;
    }
    if(drag.offsetTop >= maxHeight )
    {
        drag.style.top = maxHeight + 'px' ;
    }

    // 求比例 => 算出右侧放大所需比例
    var proportionX = drag.offsetLeft / maxWidth ;
    console.log(proportionX);
    var proportionY = drag.offsetTop / maxHeight ;
    console.log(proportionY);

    // 求大图最大可移动距离 乘比例可达到局部放大效果
    var maxWidth2 = bokuto.offsetWidth - big.offsetWidth ;
    var maxHeight2 = bokuto.offsetHeight - big.offsetHeight ;
    bokuto.style.top = - maxHeight2*proportionY + 'px' ;
    bokuto.style.left = - maxWidth2*proportionX + 'px' ;
}