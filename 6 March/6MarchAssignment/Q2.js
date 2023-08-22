let delay = 3000;

console.log(`Generating a random number in ${delay/1000} seconds`);

let timeRemaining= delay/1000;
let interval = setInterval(()=>{
    timeRemaining--
    console.log(`Generating a random number in ${timeRemaining} seconds`)
},1000)
setTimeout(() => {
    clearInterval(interval);
    let a = Math.random();
    console.log(`Random number is ${a}`);
}, delay);



