const incbtn = document.getElementById("incbtn");
const decbtn = document.getElementById("decbtn");
const reset = document.getElementById("reset");
const value = document.getElementById("value");

incbtn.addEventListener("click",()=>{
    const val = Number(value.innerText);
    if (val>=10){
        alert("Values greater than 10 are not allowed");
    }
    else{
        value.innerText=val+1;
    }
});

decbtn.addEventListener("click",()=>{
    const val = Number(value.innerText);
    if(val<=0){
        alert("Negative values are not allowed");
    }
    else{
        value.innerText=val-1;
    }
});

reset.addEventListener("click",()=>{
    value.innerText=0;
});