var flowerSea = document.querySelector("audio");

setInterval(function(){
    console.log(flowerSea.currentTime);
    flowerSea.playbackRate = 16;
    console.log(flowerSea.duration);
    console.log(flowerSea.ended);
    console.log(flowerSea.paused);
    flowerSea.volume = 0.5;
},1000)

var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
flowerSea.addEventListener("canplaythrough",function() {
    console.log("加载完成");
})
flowerSea.addEventListener("timeupdate",function() {
    console.log("播放");
})
flowerSea.addEventListener("ended",function() {
    console.log("结束");
})

btn1.onclick = function() {
    flowerSea.play();
}
btn2.onclick = function() {
    flowerSea.pause();
}
btn3.onclick = function() {
    flowerSea.load();
}