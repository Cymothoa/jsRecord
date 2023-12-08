var str = "Endymion in Latmos";
console.log(str,"原字符串");
str.indexOf("m");
console.log(str.indexOf("m"));

var mm = str.lastIndexOf("m");
console.log(mm); 

var aa = str.slice(-12,-6);
console.log(aa,'slice方法');

var bb = str.substring(3);
console.log(bb,'substring方法');

var cc = str.substr(3,12);
console.log(cc,'substr方法');

var dd = str.replace("Endymion",'Strobo');
console.log(dd,'replace方法')
console.log(str,'字符串1');

var ff = str.split(",");
console.log(ff,"split方法");

var gg = str.charAt(14);
console.log(gg,'chatAt方法');

var a=14;
var b=3;
var c=a/b;
console.log(c);

document.write("John said ,\"Hi!\"");