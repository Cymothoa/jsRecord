var btn = document.querySelectorAll('.list li');
console.log(btn);
var picture = document.getElementsByTagName("img");
var imgBox = document.getElementById("imgBox");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var isNow = 0;
for(var i=0;i<btn.length;i++) {
    btn[i].index = i;
    btn[i].onclick = function() {
        for(var j=0;j<btn.length;j++) {
            btn[j].className = '';
        }
        // this=>btn[i]
        this.className = 'selected';
        isNow = this.index;
        imgBox.style.left = -590 * this.index + 'px';
    }
}

// 下一张
next.onclick = function() {
    isNow++;
    if(isNow > picture.length - 1) {
        isNow = 0;
    }
    for(var i=0;i<btn.length;i++) {
        btn[i].className = '';
    }
    btn[isNow].className = 'selected';
    imgBox.style.left = -590 * isNow + 'px';
}

// 上一张
prev.onclick = function() {
    isNow--;
    if(isNow < 0) {
        isNow = picture.length -1;
    }
    for(var i=0;i<btn.length;i++) {
        btn[i].className = '';
    }
    btn[isNow].className = 'selected';
    imgBox.style.left = -590 * isNow + 'px';
}