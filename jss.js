let a;
let b;
document.getElementById("button").onclick=function(){

a=document.getElementById("sideA").value;
}
document.getElementById("button1").onclick=function(){
 b=document.getElementById("sideB").value;
}
a=Number(a);
b=Number(b);
document.getElementById("buttonw").onclick=function()
{   let y=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    if(y==NaN){
    document.getElementById("answer").innerHTML= "<h1> GIVE ALL ELEMENTS CRCTLY </h1>"

    }
    else{
        document.getElementById("answer").innerHTML= y;

    }

}
let guesses=0;
let randd=Math.floor(Math.random()*10 +1);
document.getElementById("submit1").onclick=function()
{
 guesses+=1;   
    let guess=document.getElementById("gus").value;
    if(guess==randd)
    {
        document.getElementById("boo").innerHTML=`You Win It took you ${guesses} tries`;

    }
    else if(guess<randd)
    {
        document.getElementById("boo").innerHTML="Too small";
    }
    else
    {
        document.getElementById("boo").innerHTML="Too large";
    }
}
document.getElementById("sub").onclick=function(){
let temp=document.getElementById("temp").value;
if(document.getElementById("celsious").checked)
{   let te=(temp-32)*5/9;
te=te.toLocaleString(undefined,{style:"unit",unit:"fahrenheit"})
    document.getElementById("tempres").innerHTML=`The temperature converted from farenheit is ${te}`;
}
else{
    let te=(temp * 9/5) + 32 ;
    te=te.toLocaleString(undefined,{style:"unit",unit:"celsius"})
    document.getElementById("tempres").innerHTML=`The temperature converted from celsious is ${te}`;

}
}