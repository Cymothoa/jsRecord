var a=13;
for(var i=0;i<5;i++)
{
    console.log("当前值为：" + i);
}

while(a<15)
{
    console.log("a=" + a);
    a++;
    continue;
    for(var n=0;n<5;n++)
    {
        console.log("n=" + n);
    }
}

do
{
    console.log(a,'do while');
    a++;
}while(a<20)