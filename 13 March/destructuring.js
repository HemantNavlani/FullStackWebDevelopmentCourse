//+++=++++++++++++++++++++

//Spread operator

// const oneArray = [1,2,3,4]
// const twoArray = [5,6,7,8]

// const threeArray = oneArray.concat(twoArray)

// const threeArray = [oneArray,twoArray]
//it makes 2D array 

// const threeArray = [...oneArray, ...twoArray];
// console.log(threeArray)

// ...  -> spread operator

// ...oneArray means 1,2,3,4 ab ye individual me hogaya array nhi bach a
// ...twoArray means 5,6,7,8


//--------------------------------------
//Rest operator

function manyArguments(){
    console.log(typeof arguments)
    let args = Array.from(arguments);
    let finalArr =  args.map(e=>e);
    console.log(finalArr)
}

function manyArguments2(...args){
    console.log(typeof args);
    let finalArr = args.map(e=>e)
    console.log(finalArr)
}
manyArguments(1,2,3);
manyArguments(1,2,3,4,5,6,7)

manyArguments2(1,2,3);
manyArguments2(1,2,3,4,5,6,7)

//+++++++++++++++++++++++++++++++

const names = ["superman","flash"]
const newNames = ["Batman",...names,"thor"];

const sitename = "pwskills";
console.log([...sitename])

function pwskills(...values){
    return values;
}
console.log(pwskills("superman","flash"))


