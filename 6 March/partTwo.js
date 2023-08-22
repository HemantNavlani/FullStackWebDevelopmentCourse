let arr=[2,3,4];

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})

arr.forEach((element,index,arr)=>{
    console.log("Arrow function :",index,element,arr);
})

const heros =["salman","nagraj","maniraj","hemant"];
heros.forEach((element)=>{
    console.log(element.toUpperCase())
})

arr.map(function(element,index,arr){
    console.log(element,index,arr);
})

heros.map((h)=>console.log(h.toUpperCase()));


//for each and map can be used interchangeably

//filter
console.log(heros);
const herosWithRaj=heros.filter((h)=>{
    return h.endsWith('raj')
})
console.log(herosWithRaj);

//shopping cart 

const cartBill = [20,30,50]
const sumOfCartBill = cartBill.reduce((prev,curr)=>prev+curr,0);//0 here is initial value
console.log(sumOfCartBill);



const gameScore=[200,300,310,250,150]
// const gameScore=[200,300,310,250,150,"Hitesh"]

//check if all values are numbers
// console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v)=>typeof v==='number');
console.log("check:",gameScoreCheck);
//find score above 200
const above200 = gameScore.find((score)=> score>200)//it is a greedy method//so it returns the first value that satisfies the condition
console.log(above200);


//Read yourself
//findIndex
//some
//sort

