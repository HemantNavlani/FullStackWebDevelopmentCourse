const powerTwo = (n)=>{
    return n**2;
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n;
}
// console.log(powerCube(powerTwo,3));
function sayHello(){
    return () =>{
        console.log("Hello World")
    }
}
let guessValue = sayHello();
// console.log(guessValue);
// guessValue();

const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return m+n+p;
        }
        return twoFun;
    }
    return oneFun;
}
console.log(higherOrder(2)(3)(4))//syntax to run


const myNums = [2,3,4,5];
const sumArray = arr =>{
    let total = 0;
    arr.forEach(function(element){
        total+=element;
    });
    return total
}
console.log(sumArray(myNums));


function oneMoreHello(){
    console.log("hello hemant");
}
// setInterval(oneMoreHello,1000);//it runs this method runs after every particular time
setTimeout(oneMoreHello,2000);//it stops after running after the time interval given in the function