//seeing something about scopes 
let score=4;
function one (){
    let score = 0;
    console.log(score);
}
function two (){
    let score = 3;
    console.log(score);
}
function three(){
    console.log(score)
}
// one();
// two();
// three();
// console.log(score);



//this is the example of lexical scoping
function outerFunc(){
    let outerVar = "I am at scope level 1";
    function innerFunc(){
        let innerVal = "I am at scope level 2"
        console.log(outerVar)
    }
    console.log(innerVal);//it cannot be accessed 
    innerFunc();
}
// outerFunc();


const myGlobalValue = 0;

function func(){
    const val1 = 1;
    console.log(myGlobalValue);
    // console.log(val3)//error

    function innerofFunc(){
        const val2 = 2;
        console.log(val2,val1,myGlobalValue)

        function innerofInnerfunc(){
            const val3 = 3;
            console.log(val3,val2,val1,myGlobalValue)
        }
        innerofInnerfunc();
    }
    innerofFunc();
}

// func();



//closure
function superFunc(){
    let outerValue = 'I am outer'
    function minorFunc(){
        console.log(outerValue)
        //ye andar vala function bahar ki cheezo ko yaad rakh skta h issi ko closure kehte hai 
    }
    minorFunc();
}
// superFunc();



const errorMessage = "File not found"

setTimeout(function callback (){
    console.log(errorMessage)
    //ye closure ki vajah se hi execute ho pa raha hai as it has access of outer things
},1000)



let pageCount = 0

const items = [2,4,5,7,8]

items.forEach(function iterator (num){
    pageCount++;
    console.log(num)
})
console.log("Page Count ", pageCount)