var ans=0;
var s=""
 document.getElementById("add").onclick=function()
 {
    var a =parseInt(document.getElementById("n1").value);
    ans=ans+a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("+"+a);
    document.getElementById("result").textContent =ans;
}
document.getElementById("sub").onclick=function()
{
    var a =parseInt(document.getElementById("n1").value);
    ans=Math.abs(ans-a);
    if(s.length==0)
    s=s+a;
    else
    s=s+("-"+a);
    document.getElementById("result").textContent =ans;
}


document.getElementById("mul").onclick=function()
{
    var a =parseInt(document.getElementById("n1").value);
    ans=ans*a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("*"+a);
    document.getElementById("result").textContent =ans;
}

document.getElementById("div").onclick=function()
{
    var a =parseInt(document.getElementById("n1").value);
    ans=ans/a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("/"+a);
    document.getElementById("result").textContent =ans;
}

document.getElementById("answer").onclick=function(){
    document.getElementById("wait").textContent=s;
}
/*add=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a+b);
   /* console.log(n1+n2);
}*/

/*sub=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a-b);
   /* console.log(n1-n2);
}*/

/*mul=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a*b);
   /* console.log(n1*n2);
}*/
/*div=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a/b);
   /* console.log(n1/n2);
}*/


