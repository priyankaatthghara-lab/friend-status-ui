let btnchanger=document.querySelector("#Add")
let changeelement=document.querySelector("h5");
let butnchanger=document.querySelector("#Remove");
btnchanger.addEventListener("click",()=>{
    changeelement.innerHTML="Friend";
    changeelement.style.fontSize="30px";
    changeelement.style.color="green";
    btnchanger.style.transition="opacity 0.5s ease";
    btnchanger.style.opacity=0.5;
    setTimeout(()=>{
     btnchanger.style.opacity=1;
   
     
    },3000)
})

butnchanger.addEventListener("click",()=>{
    changeelement.innerHTML="Stranger";
    changeelement.style.fontSize="30px";
    changeelement.style.color="red";
butnchanger.style.transition="opacity 0.5s ease";
butnchanger.style.opacity=0.5;
setTimeout(()=>{
    butnchanger.style.opacity=1;
},3000);
    
})