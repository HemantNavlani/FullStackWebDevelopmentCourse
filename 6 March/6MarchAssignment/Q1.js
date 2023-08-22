let str  = "Hello";
setTimeout(()=>{
    let rev = str.split("").reverse().join("")
    console.log(rev)
},2000);