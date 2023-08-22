const btn = document.getElementById("button");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons ="#";
    for(let i=0;i<6;i++){
        cons = cons+val[Math.floor(Math.random()*16)];
        //math.random gives random values between 0 and 0.99
    }
    return cons;
};

function changeRandomColor(){
    document.body.style.backgroundColor=randomColor();
}

btn.addEventListener("click",changeRandomColor);
