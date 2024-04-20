let calcArray=[];
let equal=document.getElementById("equal");
let del=document.getElementById("del");
let clear=document.getElementById("clear");
let add=document.getElementById("add");
let subtrt=document.getElementById("subt");
let mptly=document.getElementById("mult");
let dvdi=document.getElementById("divd");
let monitor=document.getElementById("monitor");
let ansValue=document.getElementById("ans");
let ans=0;
add.addEventListener("click",function(){
    monitor.innerHTML+="+";
});
subtrt.addEventListener("click",function(){
    monitor.innerHTML+="-";
    calcArray.push("-");
});
mptly.addEventListener("click",function(){
    monitor.innerHTML+="x";
    calcArray.push("x");
});
dvdi.addEventListener("click",function(){
    monitor.innerHTML+="÷";
    calcArray.push("÷");
});
ansValue.addEventListener("click",function(){
    monitor.innerHTML+="Ans";
});
del.addEventListener("click",function(){
    if (monitor.innerHTML!=""){
        monitor.innerHTML=monitor.innerHTML.slice(0,-1);
    }
});
equal.addEventListener("click",function(){
    for (let i=0;i<calcArray.length;i++){
    }
});
clear.addEventListener("click",function(){
    monitor.innerHTML="";
});