var changeBtn = document.querySelector(".changeBtn");
var lists = document.querySelectorAll(".list li");
var btn1=document.querySelector(".btn1");
var btn2=document.querySelector(".btn2");
var btn3=document.querySelector(".btn3");
var btn4=document.querySelector(".btn4");

changeBtn.onclick = function(){
    btn1.style.color = 'red';
    btn2.style.color = 'blue';
    btn3.style.color = 'greenyellow';
    btn4.style.color = 'pink';
}



var btn=document.querySelectorAll(".title li");
var text=document.querySelectorAll(".main li");
for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
        for(var j=0;j<text.length;j++)
        {
            btn[j].className='';
            text[j].className='';
        }
        this.className='selected';
        text[this.index].className='display';
    }
}