let equal=document.getElementById("equal");
let del=document.getElementById("del");
let add=document.getElementById("add");
let subtrt=document.getElementById("subt");
let monitor=document.getElementById("monitor");
let ans=0;
add.addEventListener("click",function(){
    monitor.innerHTML+="+";
});
subtrt.addEventListener("click",function(){
    monitor.innerHTML+="-";
});
del.addEventListener("click",function(){
    if (monitor.innerHTML!=""){
        monitor.innerHTML=monitor.innerHTML.slice(0,-1);
    }
});