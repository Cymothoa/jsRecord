var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function(){
    var timer1 = setInterval(function(){
        if(box1.offsetWidth>250){
            clearInterval(timer1);
        }
        else{
            box1.style.width = box1.offsetWidth + 10 + 'px' ;
            console.log(box1.offsetWidth);
        }
    },1000)
}

btn2.onclick = function(){
    var timer1 = setInterval(function(){
        if(box1.offsetWidth<=200){
            clearInterval(timer1);
        }
        else{
            box1.style.width = box1.offsetWidth - 10 + 'px' ;
            console.log(box1.offsetWidth);
        }
    },1000)
}