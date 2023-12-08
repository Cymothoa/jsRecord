var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.onclick = function () {
    var a = setInterval(function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop < 738) {
            scrollBy(0, 150);
        }
        else {
            clearInterval(a);
            window.alert("到底了");
        }
    }, 500)
}

btn2.onclick = function () {
    clearInterval(a);
    clearInterval(b);
}

btn3.onclick = function () {
    var b = setInterval(function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 0) {
            scrollBy(0, -150);
        }
        else {
            clearInterval(b);
            window.alert("到顶了");
        }
    }, 500)
}