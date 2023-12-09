var wid = document.body.clientWidth ||document.documentElement.clientWidth;
var hei = document.body.clientHeight || document.documentElement.clientHeight;

function leaf(){
    // 设置图片大小
    this.width = Math.random()*100+100;
    // 设置树叶距离左侧的距离
    this.newLeft = Math.random()*(wid-this.width);
    this.tops = 0;
    // 随机引入图片
    this.newImg = '../img/' + Math.floor(Math.random()*4+1)+'.png';
}

// 树叶初始状态
leaf.prototype.init = function(){
    var imgs = document.createElement("img");
}